class AdminControler {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view._inputListeners(this.bindAddWork)
        this.view._buttonListener(this.handleChangePageData);



    }
    bindAddWork = data => {
        return this.model.handleAddWork(data);
    }
    handleChangePageData = (social_links, sectionHeaders, footerHeaders, texts) => {
        return this.model.changePageDataHandler(social_links, sectionHeaders, footerHeaders, texts);
    }

}


const adminModel = new AdminControler(new AdminModel(), new AdminView())