document.querySelector(".side-bar-icon").addEventListener("click", e => {
    e.currentTarget.classList.toggle("side-bar-icon-active");
    document.querySelector(".side-bar-icon > img").classList.toggle("side-bar-img-active");

    document.querySelector("#side-menu").classList.toggle("side-bar-active")
})