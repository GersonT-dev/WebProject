// main.js - modal control, contact form, run timer, and message toggle

document.addEventListener('DOMContentLoaded', () => {
  // Modal elements
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('modal-open');
  const closeBtn = document.getElementById('modal-close');
  const okBtn = document.getElementById('modal-ok');

  function showModal() {
    if (!modal) return;
    modal.classList.remove('modal--hidden');
    modal.setAttribute('aria-hidden', 'false');
    // focus first focusable inside modal for accessibility
    closeBtn?.focus();
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    if (!modal) return;
    modal.classList.add('modal--hidden');
    modal.setAttribute('aria-hidden', 'true');
    openBtn?.focus();
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', showModal);
  closeBtn?.addEventListener('click', hideModal);
  okBtn?.addEventListener('click', hideModal);

  // overlay click closes modal (only when clicking the overlay itself)
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  // Esc key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('modal--hidden')) {
      hideModal();
    }
  });

  // Additional button in contact box that opens modal
  const contactOpenBtn = document.getElementById('contact-open-modal');
  contactOpenBtn?.addEventListener('click', showModal);

  // Click Me / message toggle
  const myButton = document.getElementById('myButton');
  const message = document.getElementById('message');
  if (message) {
    message.textContent = '';         // ensure no initial text
    message.classList.add('hidden');  // hidden initially
  }
  myButton?.addEventListener('click', () => {
    if (!message) return;
    if (message.classList.contains('show')) {
      message.classList.remove('show');
      message.classList.add('hidden');
      message.textContent = '';
    } else {
      message.textContent = 'Hello! You clicked the button.';
      message.classList.remove('hidden');
      message.classList.add('show');
    }
  });

  // Contact form handling (simple client-side demo)
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('contact-status');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('contact-email')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || '';
    const msg = document.getElementById('contact-message')?.value || '';
    // Basic validation is already handled by required on email. Show a fake "sent" message.
    contactStatus.textContent = 'Sending...';
    setTimeout(() => {
      contactStatus.textContent = `Sent! Email: ${email}${phone ? ', Phone: ' + phone : ''}`;
      contactForm.reset();
    }, 700);
  });

  // Run button - compute actual delay between clicks
  const runBtn = document.getElementById('run');
  const logBody = document.getElementById('log');
  let lastTimestamp = null; // in ms

  runBtn?.addEventListener('click', () => {
    const now = Date.now();
    const nowStr = new Date(now).toLocaleTimeString();
    const tr = document.createElement('tr');

    let prevStr = '-';
    let delayStr = '-';
    if (lastTimestamp !== null) {
      const diff = now - lastTimestamp; // ms between clicks
      delayStr = diff.toString(); // ms
      prevStr = new Date(lastTimestamp).toLocaleTimeString();
    }

    tr.innerHTML = `<td>${prevStr}</td><td>${nowStr}</td><td>${delayStr}</td>`;
    logBody?.prepend(tr);

    lastTimestamp = now;
  });

  // Optional: clear lastTimestamp on page load so first click has '-' previous
  lastTimestamp = null;
});
