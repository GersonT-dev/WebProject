const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
