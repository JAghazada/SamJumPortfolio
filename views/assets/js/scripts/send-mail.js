const sendMailButton = document.querySelector(".send-message-btn");
const popup = document.querySelector(".popup")
sendMailButton.addEventListener("click", e => {
    e.preventDefault();

    const name = document.querySelector("#name-inp").value.trim();
    const surname = document.querySelector("#surname-inp").value.trim();
    const email = document.querySelector("#email-inp").value.trim();
    const phone = document.querySelector("#phone-inp").value.trim();
    const message = document.querySelector("#message-inp").value.trim();
    fetch("/send-mail", {
        method: "POST",
        body: JSON.stringify(
            {
                name, surname, email, phone, message
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            popup.classList.add("active");
            popup.textContent = res.message;

        })
        .catch(err => {
            popup.classList.add("active");
            popup.textContent = err.message;

        })
        .finally(() => {
            setTimeout(() => {
                popup.classList.remove("active")
            }, 1000);
        })

})