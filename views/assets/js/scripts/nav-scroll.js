const navLinks = document.querySelectorAll(".nav-item");
const sideMenuLinks = document.querySelectorAll("#side-menu > li");
window.addEventListener('scroll', function (e) {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
    const sections = document.querySelectorAll("section");
    let currentSection;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute('id');
        }
        document.querySelector(`.nav-item.active`).classList.remove("active")
        document.querySelector(`#side-menu > li.active`).classList.remove("active")

        if (currentSection !== undefined) {
            document.querySelectorAll(".nav-item").forEach(link => {
                if (`#${currentSection}` === link.classList[1]) {
                    link.classList.add("active")
                }
            })
            document.querySelectorAll("#side-menu > li").forEach(link => {
                if (`#${currentSection}-side` === (link.classList[0])) {
                    link.classList.add("active");
                }
            })
        } else {
            document.querySelector(".nav-item").classList.add("active")
            document.querySelector("#side-menu>li").classList.add("active")

        }
    })

});
const discoverButton = document.querySelector(".discover-works-btn");
const sayHiButton = document.querySelector(".say-hi-btn");
const scrollToSection = (e, id, type) => {
    const targetSection = document.getElementById(id);
    targetSection.scrollIntoView({ behavior: "smooth" });
    if (type === "nav") {
        document.querySelector(".nav-item.active").classList.remove("active");
    } else {
        document.querySelector(`#side-menu > li.active`).classList.remove("active")
    }
    e.currentTarget.classList.add("active");



}
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        const id = (link.classList[1]).split("#")[1];
        scrollToSection(e, id, "nav")
    });


})
sideMenuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = ((link.classList[0]).split("-side"))[0].split("#")[1];

        scrollToSection(e, id, "side")
    });


})
discoverButton.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("works").scrollIntoView({ behavior: "smooth" })

})
sayHiButton.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })

})