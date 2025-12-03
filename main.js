const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

function openModal() {
    modal.classList.add("open");
}

function closeModal() {
    modal.classList.remove("open");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Close when clicking outside box
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// ESC key closes modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
