// main.js - modal control and small helpers
// Updated to explicitly hide #message initially and toggle via class

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('modal-open');
  const closeBtn = document.getElementById('modal-close');
  const okBtn = document.getElementById('modal-ok');

  function showModal() {
    if (!modal) return;
    modal.classList.remove('modal--hidden');
    modal.setAttribute('aria-hidden', 'false');
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
  modal?.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal && !modal.classList.contains('modal--hidden')) hideModal(); });

  // Ensure the message starts hidden and empty
  const myButton = document.getElementById('myButton');
  const message = document.getElementById('message');
  if (message) {
    message.textContent = '';         // remove any initial text
    message.classList.add('hidden');  // explicitly hide it
  }

  myButton?.addEventListener('click', () => {
    if (!message) return;
    // toggle: show with text, or hide and clear text
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

  // "Run" button demo (logs to table)
  const runBtn = document.getElementById('run');
  const logBody = document.getElementById('log');
  runBtn?.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const now = new Date().toLocaleTimeString();
    tr.innerHTML = `<td>-</td><td>${now}</td><td>n/a</td>`;
    logBody?.prepend(tr);
  });
});
