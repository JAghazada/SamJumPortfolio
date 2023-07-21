const CoolSamJumPhoto = document.querySelector(".coolsamjumphoto");

const DoUWantCallToSamJum = () => {
    const phoneNumber = document.querySelector(".coolsamjumphoto").textContent
    window.location.href = "tel:" + phoneNumber;
}

CoolSamJumPhoto.addEventListener("click", DoUWantCallToSamJum)