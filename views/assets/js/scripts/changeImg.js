const SamJumPhoto = document.querySelector("#samjumphoto")
const changeImage = () => {
    if (window.outerWidth < 1242) {
        for (let index = 1; index < 6; index++) {
            document.querySelector(`.ab-item-${index} > img`).src = `/icons/icon${index}-small.svg`
        }
    }
    else {
        for (let index = 1; index < 6; index++) {
            document.querySelector(`.ab-item-${index} > img`).src = `/icons/icon${index}.svg`
        }
    }



}
window.onload = changeImage;
window.addEventListener("resize", changeImage)