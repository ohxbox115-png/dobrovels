(() => {
  'use strict';

  const ICONS = {
    stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3M6 3H4m2 0h0m8 0h2M10 13v2a5 5 0 0 0 10 0v-2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="20" cy="11" r="2" fill="none" stroke="currentColor" stroke-width="2.2"/>',
    brain: '<path d="M12 5a3 3 0 0 0-5.6 1.4A3 3 0 0 0 4 9.5a3 3 0 0 0 .8 4.8A3 3 0 0 0 9 18.6 3 3 0 0 0 12 20m0-15a3 3 0 0 1 5.6 1.4A3 3 0 0 1 20 9.5a3 3 0 0 1-.8 4.8 3 3 0 0 1-4.2 4.3A3 3 0 0 1 12 20m0-15v15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
    wave: '<path d="M3 12h3l2-5 4 10 3-7 2 2h4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    device: '<rect x="3" y="4" width="18" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="10" r="2.6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8 20h8M12 16v4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    target: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',
    glasses: '<circle cx="6.5" cy="14" r="3.8" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.5" cy="14" r="3.8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M10.3 14c1.1-1 2.3-1 3.4 0M2.7 14 4 7.5h2.5M21.3 14 20 7.5h-2.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  const SERVICES = [
    { title: 'Детский офтальмолог', text: 'Проверка зрения, диагностика и лечение глазных заболеваний у детей любого возраста.', icon: 'eye', tone: 'green' },
    { title: 'Педиатр', text: 'Осмотры, лечение и наблюдение за здоровьем ребёнка с рождения до 18 лет.', icon: 'stethoscope', tone: 'teal' },
    { title: 'Детский невролог', text: 'Развитие, сон, внимание, головные боли — консультации и наблюдение.', icon: 'brain', tone: 'pink' },
    { title: 'Аппаратное лечение', text: 'Лечение зрения у детей на современном офтальмологическом оборудовании.', icon: 'device', tone: 'green' },
    { title: 'Диагностика', text: 'Диагностические обследования, чтобы врач поставил точный диагноз.', icon: 'wave', tone: 'teal' },
    { title: 'Зрительный тренинг', text: 'Занятия в специально оборудованном кабинете зрительного тренинга.', icon: 'target', tone: 'pink' },
    { title: 'Очки и контактные линзы', text: 'Подбор очков любой сложности, включая дефокусные линзы (Miyosmart, Miyosmart iQ, Myosafe pro, Stellest). Мягкие контактные линзы, ортокератологические линзы. Свой отдел оптики с оправами для детей.', icon: 'glasses', tone: 'green' },
  ];

  const DOCTORS = [
    {
      name: 'Власова Елена Сергеевна',
      role: 'Детский офтальмолог',
      specialist: 'Детский офтальмолог',
      about: 'Врач высшей категории, стаж 18 лет.',
      photo: 'assets/doctor-vlasova.jpg',
      services: ['ophthalmologist-3-18', 'ophthalmologist-0-3', 'hardware-treatment', 'vision-training', 'glasses', 'soft-lenses', 'ortho-k-lenses'],
    },
    {
      name: 'Кузнецова Ольга Сергеевна',
      role: 'Детский офтальмолог',
      specialist: 'Детский офтальмолог',
      about: 'Стаж 4 года.',
      photo: '',
      services: ['ophthalmologist-3-18', 'ophthalmologist-0-3', 'hardware-treatment', 'vision-training', 'glasses', 'soft-lenses'],
    },
    {
      name: 'Ермолина Елена Анатольевна',
      role: 'Педиатр',
      specialist: 'Педиатр',
      about: 'Врач высшей категории, стаж 37 лет.',
      photo: 'assets/doctor-ermolina.jpg',
      services: ['pediatrician'],
    },
    {
      name: 'Белошенко Анастасия Владимировна',
      role: 'Педиатр',
      specialist: 'Педиатр',
      about: 'Врач высшей категории, стаж 15 лет.',
      photo: 'assets/doctor-beloshenko.jpg',
      services: ['pediatrician'],
    },
    {
      name: 'Ильясова Диана Курбановна',
      role: 'Педиатр',
      specialist: 'Педиатр',
      about: '',
      photo: '',
      services: ['pediatrician'],
    },
    {
      name: 'Боярская Анна Васильевна',
      role: 'Детский невролог',
      specialist: 'Детский невролог',
      about: 'Врач высшей категории, стаж 21 год.',
      photo: 'assets/doctor-boyarskaya.jpg',
      services: ['neurologist'],
    },
    {
      name: 'Махкамбаев Сервер Якубович',
      role: 'Детский невролог, мануальный терапевт',
      specialist: 'Детский невролог',
      about: 'Врач высшей категории, стаж 24 года.',
      photo: 'assets/doctor-mahkambaev.jpg',
      services: ['neurologist', 'manual-therapy'],
    },
  ];

  const DOCTOR_TONES = ['green', 'teal', 'pink'];

  const PRICE_LIST = {
    'ophthalmologist-3-18': { name: 'Консультация врача-офтальмолога (дети от 3 до 18 лет)', price: 3200 },
    'ophthalmologist-0-3': { name: 'Консультация врача-офтальмолога (дети до 3 лет)', price: null },
    'hardware-treatment': { name: 'Аппаратное лечение', price: null },
    'vision-training': { name: 'Занятие в кабинете зрительного тренинга', price: null },
    pediatrician: { name: 'Консультация врача-педиатра', price: null },
    neurologist: { name: 'Консультация детского невролога', price: null },
    'manual-therapy': { name: 'Сеанс мануальной терапии', price: null },
    glasses: { name: 'Подбор очков', price: null },
    'soft-lenses': { name: 'Подбор мягких контактных линз', price: null },
    'ortho-k-lenses': { name: 'Подбор ортокератологических линз', price: null },
  };

  const DEFAULT_SPECIALIST = 'Пока не знаю';

  const SUN_PATH = (() => {
    const points = [];
    const waves = 14;
    for (let step = 0; step <= 360; step += 3) {
      const angle = (step * Math.PI) / 180;
      const radius = 88 + 8 * Math.cos(waves * angle);
      points.push(`${(100 + radius * Math.cos(angle)).toFixed(1)} ${(100 + radius * Math.sin(angle)).toFixed(1)}`);
    }
    return `M${points.join('L')}Z`;
  })();

  const DOODLES_SVG = `
    <path class="doodle doodle--star" d="M38 30l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2Z"/>
    <path class="doodle doodle--heart" d="M262 62s-14-8-14-17c0-5 4-8 8-8 3 0 5 2 6 4 1-2 3-4 6-4 4 0 8 3 8 8 0 9-14 17-14 17Z"/>
    <circle class="doodle doodle--ring" cx="40" cy="190" r="9"/>
    <circle class="doodle doodle--dot" cx="270" cy="170" r="5"/>
    <circle class="doodle doodle--dot" cx="248" cy="198" r="3"/>
    <path class="doodle doodle--squiggle" d="M236 112c6-6 12 6 18 0s12 6 18 0"/>
    <path class="doodle doodle--star doodle--small" d="M70 128l3 6 6 1-4 4 1 7-6-3-6 3 1-7-4-4 6-1Z"/>
  `;

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

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
  }


  function initialsOf(fullName) {
    return fullName.split(' ').slice(0, 2).map((part) => part.charAt(0)).join('');
  }

  function renderDoctorPortrait(doctor, className = 'doctor-card__photo') {
    if (doctor.photo) {
      return `<img class="${className}" src="${doctor.photo}" alt="${escapeHtml(doctor.name)}" width="300" height="300" loading="lazy" draggable="false">`;
    }
    return `<span class="${className} ${className}--initials" aria-hidden="true">${escapeHtml(initialsOf(doctor.name))}</span>`;
  }

  function doctorTone(index) {
    return DOCTOR_TONES[index % DOCTOR_TONES.length];
  }

  function renderDoctorCard(doctor, index) {
    const specialist = doctor.specialist || DEFAULT_SPECIALIST;
    const tone = doctorTone(index);
    return `
      <article class="carousel__slide" data-carousel-slide="${index}" aria-roledescription="слайд">
        <div class="doctor-card doctor-card--${tone}">
          <div class="doctor-card__media">
            <svg class="doctor-card__doodles" viewBox="0 0 300 250" aria-hidden="true">${DOODLES_SVG}</svg>
            <svg class="doctor-card__sun" viewBox="0 0 200 200" aria-hidden="true"><path d="${SUN_PATH}"/></svg>
            ${renderDoctorPortrait(doctor)}
            <svg class="doctor-card__wave" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12c25-10 50-10 75 0s50 10 75 0 50-10 75 0 50 10 75 0v12H0Z"/></svg>
          </div>
          <div class="doctor-card__body">
            <span class="doctor-card__role">${escapeHtml(doctor.role)}</span>
            <h3 class="doctor-card__name">${escapeHtml(doctor.name)}</h3>
            ${doctor.about ? `<p class="doctor-card__about">${escapeHtml(doctor.about)}</p>` : '<p class="doctor-card__about"></p>'}
            <div class="doctor-card__actions">
              <button class="btn btn--primary btn--sm" type="button" data-book-specialist="${escapeHtml(specialist)}">Записаться</button>
              <button class="doctor-card__more" type="button" data-doctor-open="${index}">Услуги и&nbsp;цены</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderDoctorDialog(doctor, index) {
    const specialist = doctor.specialist || DEFAULT_SPECIALIST;
    return `
      <div class="doctor-dialog__card doctor-card--${doctorTone(index)}">
        <button class="doctor-dialog__close" type="button" data-doctor-close aria-label="Закрыть">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>
        </button>
        <div class="doctor-dialog__media">
          <svg class="doctor-dialog__doodles" viewBox="0 0 300 250" aria-hidden="true">${DOODLES_SVG}</svg>
          <svg class="doctor-dialog__doodles doctor-dialog__doodles--bottom" viewBox="0 0 300 250" aria-hidden="true">${DOODLES_SVG}</svg>
          <svg class="doctor-dialog__sun" viewBox="0 0 200 200" aria-hidden="true"><path d="${SUN_PATH}"/></svg>
          ${renderDoctorPortrait(doctor, 'doctor-dialog__photo')}
        </div>
        <div class="doctor-dialog__body">
          <span class="doctor-card__role">${escapeHtml(doctor.role)}</span>
          <h3 class="doctor-dialog__name" id="doctor-dialog-title">${escapeHtml(doctor.name)}</h3>
          ${doctor.about ? `<p class="doctor-dialog__about">${escapeHtml(doctor.about)}</p>` : ''}
          <h4 class="doctor-dialog__subtitle">Услуги и&nbsp;цены</h4>
          <ul class="prices__list doctor-dialog__prices">${doctor.services.map(renderPriceItem).join('')}</ul>
          <button class="btn btn--primary btn--block" type="button" data-book-specialist="${escapeHtml(specialist)}">Записаться к&nbsp;врачу</button>
        </div>
      </div>
    `;
  }

  function initDoctorDialog() {
    const dialog = $('[data-doctor-dialog]');
    if (!dialog || typeof dialog.showModal !== 'function') return null;

    const close = () => {
      dialog.classList.add('is-closing');
      window.setTimeout(() => {
        dialog.classList.remove('is-closing');
        dialog.close();
      }, prefersReducedMotion ? 0 : 220);
    };

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('[data-doctor-close]')) close();
      if (event.target.closest('[data-book-specialist]')) dialog.close();
    });

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      close();
    });

    return (index) => {
      dialog.innerHTML = renderDoctorDialog(DOCTORS[index], index);
      dialog.showModal();
      $('[data-doctor-close]', dialog).focus();
    };
  }

  function initDoctorsCarousel() {
    const carousel = $('[data-carousel]');
    if (!carousel || !DOCTORS.length) return;

    const track = $('[data-carousel-track]', carousel);
    const viewport = $('.carousel__viewport', carousel);
    const dotsContainer = $('[data-carousel-dots]', carousel);
    const count = DOCTORS.length;

    track.innerHTML = DOCTORS.map(renderDoctorCard).join('');
    dotsContainer.innerHTML = DOCTORS.map((doctor, index) => `
      <button class="carousel__dot" type="button" data-carousel-dot="${index}" aria-label="Врач ${index + 1} из ${count}"></button>
    `).join('');

    const slides = $$('[data-carousel-slide]', track);
    const dots = $$('[data-carousel-dot]', dotsContainer);
    const previousOffsets = new Map();
    let activeIndex = 0;

    const offsetOf = (index) => {
      let offset = (((index - activeIndex) % count) + count) % count;
      if (offset > count / 2) offset -= count;
      return offset;
    };

    const render = () => {
      const styles = getComputedStyle(carousel);
      const step = parseFloat(styles.getPropertyValue('--card-w')) + parseFloat(styles.getPropertyValue('--card-gap'));

      slides.forEach((slide, index) => {
        const offset = offsetOf(index);
        const distance = Math.abs(offset);
        const wrapped = previousOffsets.has(slide) && Math.abs(offset - previousOffsets.get(slide)) > 1;
        previousOffsets.set(slide, offset);

        if (wrapped) {
          slide.style.transition = 'none';
          slide.style.opacity = '0';
        }

        slide.style.transform = `translateX(${offset * step}px) scale(${distance === 0 ? 1 : 0.9})`;
        slide.style.zIndex = String(10 - distance);
        slide.classList.toggle('is-active', distance === 0);
        slide.classList.toggle('is-side', distance === 1);
        slide.classList.toggle('is-hidden', distance > 1);
        slide.setAttribute('aria-hidden', String(distance !== 0));
        $$('button', slide).forEach((button) => { button.tabIndex = distance === 0 ? 0 : -1; });

        if (wrapped) {
          void slide.offsetWidth;
          slide.style.transition = '';
          slide.style.opacity = '';
        }
      });

      dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === activeIndex)));
    };

    const goTo = (index) => {
      activeIndex = ((index % count) + count) % count;
      render();
    };

    $('[data-carousel-prev]', carousel).addEventListener('click', () => goTo(activeIndex - 1));
    $('[data-carousel-next]', carousel).addEventListener('click', () => goTo(activeIndex + 1));
    dotsContainer.addEventListener('click', (event) => {
      const dot = event.target.closest('[data-carousel-dot]');
      if (dot) goTo(Number(dot.dataset.carouselDot));
    });

    const openDoctor = initDoctorDialog();

    let suppressNextClick = false;

    track.addEventListener('click', (event) => {
      if (suppressNextClick) {
        suppressNextClick = false;
        event.stopPropagation();
        return;
      }

      const slide = event.target.closest('[data-carousel-slide]');
      if (!slide) return;

      if (!slide.classList.contains('is-active')) {
        event.stopPropagation();
        goTo(Number(slide.dataset.carouselSlide));
        return;
      }

      if (openDoctor && !event.target.closest('[data-book-specialist]')) {
        openDoctor(Number(slide.dataset.carouselSlide));
      }
    });

    let pointerStartX = null;
    viewport.addEventListener('pointerdown', (event) => { pointerStartX = event.clientX; });
    viewport.addEventListener('pointerup', (event) => {
      if (pointerStartX === null) return;
      const deltaX = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(deltaX) > 40) {
        suppressNextClick = true;
        window.setTimeout(() => { suppressNextClick = false; }, 0);
        goTo(activeIndex + (deltaX < 0 ? 1 : -1));
      }
    });

    if (!prefersReducedMotion && count > 1) {
      let autoplayTimer = null;
      let isPaused = false;
      const stopAutoplay = () => window.clearInterval(autoplayTimer);
      const startAutoplay = () => {
        stopAutoplay();
        autoplayTimer = window.setInterval(() => { if (!isPaused) goTo(activeIndex + 1); }, 6000);
      };

      carousel.addEventListener('pointerenter', () => { isPaused = true; });
      carousel.addEventListener('pointerleave', () => { isPaused = false; });
      carousel.addEventListener('focusin', () => { isPaused = true; });
      carousel.addEventListener('focusout', () => { isPaused = false; });

      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) startAutoplay();
        else stopAutoplay();
      }, { threshold: 0.3 }).observe(carousel);
    }

    window.addEventListener('resize', render);
    render();
  }

  const priceFormatter = new Intl.NumberFormat('ru-RU');

  function formatPrice(price) {
    return price === null ? '<span class="fill">[цена]</span>' : `${priceFormatter.format(price)}&nbsp;₽`;
  }

  function renderPriceItem(serviceId) {
    const service = PRICE_LIST[serviceId];
    return `
      <li class="prices__item">
        <span class="prices__name">${service.name}</span>
        <span class="prices__dots" aria-hidden="true"></span>
        <span class="prices__value">${formatPrice(service.price)}</span>
      </li>
    `;
  }


  const MAP_FALLBACK_BOUNDS = [[57.639371, 39.876873], [57.643736, 39.888675]];

  const MAP_PIN_SVG = `
    <svg viewBox="0 0 48 60" width="48" height="60" aria-hidden="true">
      <path d="M24 58C24 58 4 36 4 22a20 20 0 0 1 40 0c0 14-20 36-20 36Z" fill="#94a849" stroke="#fff" stroke-width="3"/>
      <path d="M24 31s-8-4.9-10.1-9.9C12.3 17.3 14.7 13.5 18.6 13.5c2.1 0 3.8 1.2 5.4 3 1.6-1.8 3.3-3 5.4-3 3.9 0 6.3 3.8 4.7 7.6C32 26.1 24 31 24 31Z" fill="#fff"/>
    </svg>
  `;

  function initMap() {
    const container = $('[data-map]');
    if (!container || !window.L) return;

    const { L } = window;
    const position = [Number(container.dataset.lat), Number(container.dataset.lon)];
    const fallbackImage = $('.map__fallback', container);
    const fallbackSource = fallbackImage ? fallbackImage.currentSrc || fallbackImage.src : null;
    container.innerHTML = '';

    const map = L.map(container, {
      center: position,
      zoom: Number(container.dataset.zoom),
      minZoom: 12,
      maxZoom: 19,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    map.attributionControl.setPrefix(false);

    if (fallbackSource) {
      L.imageOverlay(fallbackSource, MAP_FALLBACK_BOUNDS, { interactive: false }).addTo(map);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">участники OpenStreetMap</a>',
    }).addTo(map);

    const pin = L.divIcon({ className: 'map-pin', html: MAP_PIN_SVG, iconSize: [48, 60], iconAnchor: [24, 58], popupAnchor: [0, -52] });
    L.marker(position, { icon: pin, title: 'ДоброВелс' })
      .addTo(map)
      .bindPopup('<b>ДоброВелс</b><br>ул. Республиканская, 6<br>центральный вход со двора');

    const hint = document.createElement('div');
    hint.className = 'map__hint';
    hint.textContent = 'Чтобы приблизить карту, зажмите Ctrl или ⌘ и прокрутите колесо';
    container.append(hint);

    let hintTimer = null;
    container.addEventListener('wheel', (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        map.setZoom(map.getZoom() + (event.deltaY < 0 ? 1 : -1));
        return;
      }
      hint.classList.add('is-visible');
      window.clearTimeout(hintTimer);
      hintTimer = window.setTimeout(() => hint.classList.remove('is-visible'), 1200);
    }, { passive: false });

    new ResizeObserver(() => map.invalidateSize()).observe(container);
  }

  function initYear() {
    $$('[data-year]').forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  renderServices();
  renderSpecialistChips();
  initDoctorsCarousel();
  initBookFromService();
  initHeader();
  initMobileNav();
  initReveal();
  initPhoneMask();
  initBookingForm();
  initMap();
  initYear();
})();
