const worksCard = document.querySelectorAll(".work-card");
const cardModal = document.querySelector(".card-modal")
const fixedWorks = JSON.parse(works)
worksCard.forEach(work => {
    work.addEventListener("click", e => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("data-id");
        const project = fixedWorks.filter(work => id === work.projectID)[0];
        const tags = project.project_tags[0].split(",")

        document.querySelector(".project-name").textContent = project.project_name;
        document.querySelector(".project-description").textContent = project.project_description;
        document.querySelector(".get-project>a").href = project.project_link;
        document.querySelector(".img-section >img ").src = "/uploads/" + id + "_modal.img"
        document.querySelector(".tag-btn:first-child").textContent = tags[0];
        document.querySelector(".tag-btn:nth-child(2)").textContent = tags[1];
        document.querySelector(".tag-btn:last-child").textContent = tags[2];



    })
})