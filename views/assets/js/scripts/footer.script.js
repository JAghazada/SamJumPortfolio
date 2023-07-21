const CoolSamJumPhoto = document.querySelector(".coolsamjumphoto");

const DoUWantCallToSamJum = () => {
    alert()
    const phoneNumber = document.querySelector(".coolsamjumphoto").textContent
    window.location.href = "tel:" + phoneNumber;
}

CoolSamJumPhoto.addEventListener("click", () => {
    console.log("x");
    DoUWantCallToSamJum()
})