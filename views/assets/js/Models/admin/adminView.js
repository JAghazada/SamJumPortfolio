class AdminView {
    constructor() {
        this.changePageButton = this._getElement(".change-page");
        // !social links
        this.behanceLink = this._getElement("#behance")
        this.dribleLink = this._getElement("#drible")
        this.pinterestLink = this._getElement("#pinterest")
        this.instagramLink = this._getElement("#instagram")
        this.linkedinLink = this._getElement("#linkedin")
        this.facebookLink = this._getElement("#facebook")
        this.twitterLink = this._getElement("#twitter")
        this.gmailLink = this._getElement("#gmail");
        this.phoneLink = this._getElement("#phone")
        this.contactText = this._getElement("#contact-text")
        // ! section header
        this.sectionHeader1 = this._getElement("#about")
        this.sectionHeader2 = this._getElement("#contact")
        this.sectionHeader3 = this._getElement("#works")

        // ! footer headers
        this.workHeader = this._getElement("#work-w")
        this.socialHeader = this._getElement("#social-w")
        this.contactHeader = this._getElement("#contact-w")
        // ! motto 
        this.motto = this._getElement("#motto");




        this.OpenProjectModal = this._getElement(".add-project");
        this.ProjectInputs = this._getAllElements(".project-input");
        this.UploadBannerImgButton = this._getElement(".upload-banner-img");
        this.BannerImgContainer = this._getElement(".banner-img-section");
        this.UploadModalImgButton = this._getElement(".upload-modal-img");
        this.ModalImgContainer = this._getElement(".modal-img-section");
        this.NextButtons = this._getAllElements(".btn-next")
        this.projectModal = this._getElement(".project-modal");
        this.projectLayout = this._getElement(".project-layout");

        this.BackButtons = this._getAllElements(".btn-back");
        this.cardModal = this._getElement(".card-modal")
        // ! project INFO
        this.projectInfo = {
            projectName: "",
            projectDescription: "",
            projectTags: [],
            projectLink: "",
            projectBannerImg: "",
            projectModalImg: ""
        }
        this._modalListener()
    }
    _buttonListener(pageDataHandler) {
        this.OpenProjectModal.addEventListener("click", e => {
            console.log("aaaa");


            this.projectModal.style.display = "flex"

        })
        this.changePageButton.addEventListener("click", e => {
            e.preventDefault()
            const social_links = {
                behance: this.behanceLink.value.trim(),
                drible: this.dribleLink.value.trim(),
                pinterest: this.pinterestLink.value.trim(),
                instagram: this.instagramLink.value.trim(),
                twitter: this.twitterLink.value.trim(),
                facebook: this.facebookLink.value.trim(),
                linkedin: this.linkedinLink.value.trim(),
                gmail: this.gmailLink.value.trim(),
                phone: this.phoneLink.value.trim()


            }
            const sectionHeaders = {
                about_section: this.sectionHeader1.value.trim(),
                work_section: this.sectionHeader2.value.trim(),
                contact_section: this.sectionHeader3.value.trim(),

            }
            const footerHeaders = {
                footer_works: this.workHeader.value.trim(),
                footer_social: this.socialHeader.value.trim(),
                footer_contact: this.contactHeader.value.trim(),
            }
            const texts = {
                motto: this.motto.value.trim(),
                contact_text: this.contactText.value.trim(),
            }
            pageDataHandler(social_links, sectionHeaders, footerHeaders, texts);
        })
    }
    _inputListeners(handleAddWork) {
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
                    return handleAddWork(this.projectInfo)
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
                let renamedFile = "";
                if (key === "modal") {
                    renamedFile = new File([file], `${this.projectInfo.projectName.split(" ").join("")}_modal.img`, { type: file.type });

                } else {
                    renamedFile = new File([file], `${this.projectInfo.projectName.split(" ").join("")}_banner.img`, { type: file.type });

                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    element.innerHTML = '<img src="' + e.target.result + '" alt="Seçilen Resim">'
                }
                reader.readAsDataURL(renamedFile);

                if (key === "modal") return this.projectInfo.projectModalImg = renamedFile;
                else if (key === "banner") return this.projectInfo.projectBannerImg = renamedFile;

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

    _modalListener() {
        document.addEventListener("click", e => {
            if (!e.composedPath().includes(this.OpenProjectModal) && !e.composedPath().includes(this.projectLayout)) {
                this.projectModal.style.display = "none"
            }
        })
    }
}