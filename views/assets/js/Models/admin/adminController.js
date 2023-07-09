class AdminControler {
    constructor(model, view) {
        this.model = model;
        this.view = view;

    }

}


const adminModel = new AdminControler(new AdminModel(), new AdminView())