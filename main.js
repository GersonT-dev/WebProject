// main.js - modal control and small helpers

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('modal-open');
  const closeBtn = document.getElementById('modal-close');
  const okBtn = document.getElementById('modal-ok');

  function showModal() {
    if (!modal) return;
    modal.classList.remove('modal--hidden');
    modal.setAttribute('aria-hidden', 'false');
    // move focus into the modal for accessibility
    closeBtn?.focus();
    // prevent background scroll while modal open (simple)
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

  // Close when clicking the overlay (but not when clicking inside the container)
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('modal--hidden')) {
      hideModal();
    }
  });

  // Example: "Run" button small demo (logs to table)
  const runBtn = document.getElementById('run');
  const logBody = document.getElementById('log');
  runBtn?.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const now = new Date().toLocaleTimeString();
    tr.innerHTML = `<td>-</td><td>${now}</td><td>n/a</td>`;
    logBody?.prepend(tr);
  });

  // Example: myButton toggles a message
  const myButton = document.getElementById('myButton');
  const message = document.getElementById('message');
  myButton?.addEventListener('click', () => {
    if (!message) return;
    message.textContent = message.textContent ? '' : 'Hello! You clicked the button.';
  });
});
