const SamJumPhoto = document.querySelector("#samjumphoto")
const changeImage = () => {

    if (window.outerWidth < 1272) {
        for (let index = 1; index < 6; index++) {
            document.querySelector(`.ab-item-${index} > img`).src = `./assets/icons/icon${index}-small.svg`
        }
        for (let index = 1; index < 8; index++) {
            document.querySelector(`.project-no-${index}`).src = `./assets/images/projects/project-${index}-small.png`

        }
        return SamJumPhoto.src = "./assets/images/SamJumCoolBest-small.png"
    }


    for (let index = 1; index < 6; index++) {
        document.querySelector(`.ab-item-${index} > img`).src = `./assets/icons/icon${index}.svg`
    }
    for (let index = 1; index < 8; index++) {
        document.querySelector(`.project-no-${index}`).src = `./assets/images/projects/project-${index}.png`

    }

    return SamJumPhoto.src = "./assets/images/SamJumCoolBest.png"
}
window.onload = changeImage;
window.addEventListener("resize", changeImage)