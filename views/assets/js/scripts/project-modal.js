const card = document.querySelector(".card-layout");
const modal = document.querySelector(".card-modal");
const button = document.querySelector(".btn.add-project") || "";
const addWorkButton = document.querySelector(".add-work") || "";
document.addEventListener("click", e => {
    if (!e.composedPath().includes(card) && !e.composedPath().includes(button) && !e.composedPath().includes(addWorkButton)) {
        modal.style.display = "none"
    }
})