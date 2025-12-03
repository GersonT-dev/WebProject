(function () {
  var openBtn = document.getElementById('open-modal-btn');
  var closeBtn = document.getElementById('close-modal-btn');
  var modal = document.getElementById('modal');
  var previouslyFocused = null;

  function openModal() {
    previouslyFocused = document.activeElement;
    if (!modal) return;
    modal.setAttribute('data-open', 'true');
    modal.setAttribute('aria-hidden', 'false');
    // focus close button for keyboard users
    if (closeBtn) closeBtn.focus();
    // prevent page scroll while modal open
    document.documentElement.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    // restore focus
    if (previouslyFocused && previouslyFocused.focus) {
      previouslyFocused.focus();
    }
    document.documentElement.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking the overlay outside the dialog
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.getAttribute('data-open') === 'true') {
      closeModal();
    }
  });
})();
