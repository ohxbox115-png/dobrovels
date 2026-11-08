(() => {
  'use strict';

  const ICONS = {
    stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3M6 3H4m2 0h0m8 0h2M10 13v2a5 5 0 0 0 10 0v-2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="20" cy="11" r="2" fill="none" stroke="currentColor" stroke-width="2.2"/>',
    brain: '<path d="M12 5a3 3 0 0 0-5.6 1.4A3 3 0 0 0 4 9.5a3 3 0 0 0 .8 4.8A3 3 0 0 0 9 18.6 3 3 0 0 0 12 20m0-15a3 3 0 0 1 5.6 1.4A3 3 0 0 1 20 9.5a3 3 0 0 1-.8 4.8 3 3 0 0 1-4.2 4.3A3 3 0 0 1 12 20m0-15v15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
    wave: '<path d="M3 12h3l2-5 4 10 3-7 2 2h4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    target: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',
    glasses: '<circle cx="6.5" cy="14" r="3.8" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.5" cy="14" r="3.8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M10.3 14c1.1-1 2.3-1 3.4 0M2.7 14 4 7.5h2.5M21.3 14 20 7.5h-2.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  const SERVICES = [
    { title: 'Детский офтальмолог', text: 'Проверка зрения, диагностика и лечение глазных заболеваний у детей любого возраста.', icon: 'eye', tone: 'green' },
    { title: 'Педиатр', text: 'Осмотры, лечение и наблюдение за здоровьем ребёнка с рождения до 18 лет.', icon: 'stethoscope', tone: 'teal' },
    { title: 'Детский невролог', text: 'Развитие, сон, внимание, головные боли — консультации и наблюдение.', icon: 'brain', tone: 'pink' },
    { title: 'Диагностика', text: 'Диагностические обследования, чтобы врач поставил точный диагноз.', icon: 'wave', tone: 'teal' },
    { title: 'Зрительный тренинг', text: 'Занятия в специально оборудованном кабинете зрительного тренинга.', icon: 'target', tone: 'pink' },
    { title: 'Очки и контактные линзы', text: 'Подбор очков и линз, детская оптика с оправами мировых брендов.', icon: 'glasses', tone: 'green' },
  ];

  const DEFAULT_SPECIALIST = 'Пока не знаю';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderServices() {
    const container = $('[data-services]');
    if (!container) return;

    container.innerHTML = SERVICES.map((service, index) => `
      <article class="service service--${service.tone} reveal" style="--delay:${(index % 3) * 0.08}s">
        <span class="service__icon">
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">${ICONS[service.icon]}</svg>
        </span>
        <h3>${service.title}</h3>
        <p>${service.text}</p>
        <button class="service__link" type="button" data-book-specialist="${service.title}">
          Записаться
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </article>
    `).join('');
  }

  function renderSpecialistChips() {
    const container = $('[data-specialist-chips]');
    if (!container) return;

    const options = [DEFAULT_SPECIALIST, ...SERVICES.map((service) => service.title)];
    container.innerHTML = options.map((title) => `
      <label class="chip">
        <input type="radio" name="specialist" value="${title}" ${title === DEFAULT_SPECIALIST ? 'checked' : ''}>
        <span>${title}</span>
      </label>
    `).join('');
  }

  function selectSpecialist(title) {
    const input = $$('input[name="specialist"]').find((radio) => radio.value === title);
    if (!input) return;

    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));

    const chip = input.closest('.chip');
    chip.classList.remove('is-highlighted');
    void chip.offsetWidth;
    chip.classList.add('is-highlighted');
    chip.addEventListener('animationend', () => chip.classList.remove('is-highlighted'), { once: true });
  }

  function initBookFromService() {
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-book-specialist]');
      if (!trigger) return;

      selectSpecialist(trigger.dataset.bookSpecialist);
      $('#booking').scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      window.setTimeout(() => $('input[name="parent_name"]')?.focus({ preventScroll: true }), 700);
    });
  }

  function initHeader() {
    const header = $('[data-header]');
    const mobileBar = $('.mobile-bar');
    const hero = $('.hero');

    const update = () => {
      const scrolled = window.scrollY > 24;
      header.classList.toggle('is-scrolled', scrolled);

      if (mobileBar && hero) {
        const pastHero = window.scrollY > hero.offsetHeight * 0.6;
        const booking = $('#booking').getBoundingClientRect();
        const inBooking = booking.top < window.innerHeight && booking.bottom > 0;
        mobileBar.classList.toggle('is-visible', pastHero && !inBooking);
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initMobileNav() {
    const burger = $('[data-burger]');
    const nav = $('[data-nav]');
    if (!burger || !nav) return;

    const setOpen = (isOpen) => {
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
      nav.classList.toggle('is-open', isOpen);
    };

    burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  function initReveal() {
    const elements = $$('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    elements.forEach((element) => observer.observe(element));
  }

  function formatPhone(value) {
    let digits = value.replace(/\D/g, '');
    if (!digits) return '';
    if (digits[0] === '8') digits = `7${digits.slice(1)}`;
    if (digits[0] !== '7') digits = `7${digits}`;
    digits = digits.slice(0, 11);

    const groups = [digits.slice(1, 4), digits.slice(4, 7), digits.slice(7, 9), digits.slice(9, 11)];
    let result = '+7';
    if (groups[0]) result += ` (${groups[0]}`;
    if (groups[0].length === 3) result += ')';
    if (groups[1]) result += ` ${groups[1]}`;
    if (groups[2]) result += `-${groups[2]}`;
    if (groups[3]) result += `-${groups[3]}`;
    return result;
  }

  function initPhoneMask() {
    $$('[data-phone-mask]').forEach((input) => {
      input.addEventListener('input', () => {
        input.value = formatPhone(input.value);
      });
      input.addEventListener('focus', () => {
        if (!input.value) input.value = '+7 ';
      });
      input.addEventListener('blur', () => {
        if (input.value.replace(/\D/g, '').length <= 1) input.value = '';
      });
    });
  }

  function initBookingForm() {
    const form = $('[data-booking-form]');
    if (!form) return;

    const body = $('.form__body', form);
    const success = $('[data-form-success]', form);
    const status = $('[data-form-status]', form);
    const consent = $('.consent', form);

    const validators = {
      parent_name: (value) => value.trim().length >= 2,
      phone: (value) => value.replace(/\D/g, '').length === 11,
    };

    const validateField = (name) => {
      const input = form.elements[name];
      const isValid = validators[name](input.value);
      input.closest('.field').classList.toggle('is-invalid', !isValid);
      return isValid;
    };

    Object.keys(validators).forEach((name) => {
      const input = form.elements[name];
      input.addEventListener('blur', () => {
        if (input.value) validateField(name);
      });
      input.addEventListener('input', () => {
        if (input.closest('.field').classList.contains('is-invalid')) validateField(name);
      });
    });

    form.elements.consent.addEventListener('change', () => {
      consent.classList.remove('is-invalid');
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      status.textContent = '';

      const fieldsValid = Object.keys(validators).map(validateField).every(Boolean);
      const consentGiven = form.elements.consent.checked;
      consent.classList.toggle('is-invalid', !consentGiven);

      if (!fieldsValid || !consentGiven) {
        const firstInvalid = $('.is-invalid input', form);
        firstInvalid?.focus();
        if (!consentGiven && fieldsValid) status.textContent = 'Подтвердите согласие на обработку данных';
        return;
      }

      form.classList.add('is-loading');

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok || !result.ok) throw new Error(result.error || 'Request failed');

        body.hidden = true;
        success.hidden = false;
      } catch {
        status.textContent = 'Не удалось отправить заявку. Позвоните нам или напишите во ВКонтакте.';
      } finally {
        form.classList.remove('is-loading');
      }
    });

    $('[data-form-reset]', form).addEventListener('click', () => {
      const { parent_name: parentName, phone } = form.elements;
      const saved = { parentName: parentName.value, phone: phone.value };

      form.reset();
      parentName.value = saved.parentName;
      phone.value = saved.phone;

      success.hidden = true;
      body.hidden = false;
      form.elements.child_name.focus();
    });
  }

  function initYear() {
    $$('[data-year]').forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  renderServices();
  renderSpecialistChips();
  initBookFromService();
  initHeader();
  initMobileNav();
  initReveal();
  initPhoneMask();
  initBookingForm();
  initYear();
})();
