<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function field(string $name, int $maxLength = 200): string
{
    $value = trim((string)($_POST[$name] ?? ''));
    $value = preg_replace('/\s+/u', ' ', $value) ?? '';
    return mb_substr($value, 0, $maxLength);
}

function encodeHeader(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

if (field('website') !== '') {
    respond(200, ['ok' => true]);
}

$config = require __DIR__ . '/config.php';

$parentName = field('parent_name', 80);
$phone = field('phone', 30);
$phoneDigits = preg_replace('/\D/', '', $phone) ?? '';

if (mb_strlen($parentName) < 2 || strlen($phoneDigits) !== 11) {
    respond(422, ['ok' => false, 'error' => 'Invalid name or phone']);
}

$consentVersion = field('consent_version', 20);
if (field('consent') !== '1' || !in_array($consentVersion, $config['consent_versions'], true)) {
    respond(422, ['ok' => false, 'error' => 'Consent required']);
}

if ($config['mail']['to'] === '') {
    respond(500, ['ok' => false, 'error' => 'Recipient is not configured']);
}

$receivedAt = new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow'));

$lines = [
    'Имя родителя' => $parentName,
    'Телефон' => $phone,
    'Ребёнок' => field('child_name', 80),
    'Возраст' => field('child_age', 40),
    'Специалист' => field('specialist', 80),
    'Удобное время' => field('time', 40),
    'Комментарий' => field('comment', 500),
];

$body = "Новая заявка на приём — ДоброВелс\n\n";
foreach ($lines as $label => $value) {
    if ($value !== '') {
        $body .= sprintf("%s: %s\n", $label, $value);
    }
}

$body .= sprintf(
    "\nСогласие на обработку ПДн: дано, редакция от %s\nПолучено: %s (МСК)\n",
    $consentVersion,
    $receivedAt->format('d.m.Y H:i:s')
);

$headers = implode("\r\n", [
    'From: ' . encodeHeader('Сайт ДоброВелс') . ' <' . $config['mail']['from'] . '>',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
]);

$sent = mail(
    $config['mail']['to'],
    encodeHeader('Заявка на приём — ДоброВелс'),
    $body,
    $headers
);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'Delivery failed']);
}

respond(200, ['ok' => true]);
