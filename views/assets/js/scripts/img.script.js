const SamJumBestCoolPhotoIMG = document.querySelector("#samjumphoto");
const audio = document.getElementById("myAudio");
SamJumBestCoolPhotoIMG.addEventListener("click", e => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Durdur";
    } else {
        audio.pause();
        playButton.textContent = "Şarkıyı Çal";
    }
})