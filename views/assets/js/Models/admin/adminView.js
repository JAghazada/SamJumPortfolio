class AdminView {
    constructor() {
        this.ProjectInputs = this._getAllElements(".project-input");
        this.UploadBannerImgButton = this._getElement(".upload-banner-img");
        this.BannerImgContainer = this._getElement(".banner-img-section");
        this.UploadModalImgButton = this._getElement(".upload-modal-img");
        this.ModalImgContainer = this._getElement(".modal-img-section");
        this.NextButtons = this._getAllElements(".btn-next")

        this.BackButtons = this._getAllElements(".btn-back")
        // ! project INFO
        this.projectInfo = {
            projectName: "",
            projectDescription: "",
            projectTags: [],
            projectLink: "",
            projectBannerImg: "",
            projectModalImg: ""
        }

        this._inputListeners()
    }
    _inputListeners() {
        this.NextButtons.forEach(NextButton => {
            NextButton.addEventListener("click", e => {
                e.preventDefault();
                const containerNum = parseInt(e.target.classList[2].split("-")[2]);
                if (containerNum === 1) {
                    this.projectInfo.projectName = this._getElement("#p-name").value.trim();
                    this.projectInfo.projectDescription = this._getElement("#p-description").value.trim();
                    this.projectInfo.projectLink = this._getElement("#p-link").value.trim();
                    this.projectInfo.projectTags = [this._getElement("#tag-1").value.trim(), this._getElement("#tag-2").value.trim(), this._getElement("#tag-3").value.trim()];

                }
                if (containerNum === 3) {
                    return console.log(this.projectInfo);

                }
                this._getElement(".container-" + containerNum).style.display = "none";
                this._getElement(".container-" + (containerNum + 1)).style.display = "block";

            })
        });
        this.BackButtons.forEach(BackButton => {
            BackButton.addEventListener("click", e => {
                e.preventDefault();
                const containerNum = parseInt(e.target.classList[2].split("-")[2]);
                this._getElement(".container-" + containerNum).style.display = "none";
                this._getElement(".container-" + (containerNum - 1)).style.display = "block";

            })
        });





        const placeFile = (e, element, key) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    element.innerHTML = '<img src="' + e.target.result + '" alt="Seçilen Resim">'
                }
                reader.readAsDataURL(file);

                if (key === "modal") return this.projectInfo.projectModalImg = file;
                else if (key === "banner") return this.projectInfo.projectBannerImg = file;

            }



        }
        this.ProjectInputs.forEach((input, index) => {
            input.addEventListener("keydown", e => {
                if (this.ProjectInputs.length - 1 === index) {
                    return false
                }
                if (e.key === "Enter") {
                    return this.ProjectInputs[index + 1].focus()
                }
            })
        })
        this.UploadModalImgButton.addEventListener("change", e => {
            placeFile(e, this.ModalImgContainer, "modal")
        })
        // ?img input listeners
        this.UploadBannerImgButton.addEventListener("change", e => {
            placeFile(e, this.BannerImgContainer, "banner")

        })
    }
    _createElement(tag, classname) {
        const element = document.createElement(tag);
        element.classList.add(classname);
        return element
    }
    _getElement(query) {
        return document.querySelector(query);
    }
    _getAllElements(query) {
        return document.querySelectorAll(query);
    }
}