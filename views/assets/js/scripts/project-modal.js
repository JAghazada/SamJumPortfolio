const card = document.querySelector(".card-layout");
const modal = document.querySelector(".card-modal");
const button = document.querySelector(".btn.add-project") || "";
const addWorkButton = document.querySelector(".add-work") || "";
document.addEventListener("click", e => {

    if (!e.composedPath().includes(card) && !e.composedPath().includes(button) && !e.composedPath().includes(addWorkButton)) {
        if ([...e.target.classList] && [...e.target.classList].length !== 0 && [...e.target.classList].indexOf("view-details-btn") !== -1) {
            modal.style.display = "flex"
            return modal.classList.add("active")

        }
        else if ([...e.target.classList] && [...e.target.classList].length !== 0 && [...e.target.classList].includes("work-card") || [...e.target.classList].includes("work-img") || [...e.target.classList].includes("work-name")) {
            modal.style.display = "flex"
            return modal.classList.add("active")


        }
        else {

            modal.style.display = "none"
            return modal.classList.remove("active")



        }
    } else {

    }
})