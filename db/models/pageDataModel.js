const mongoose = require("mongoose");
const pageDataSchema = new mongoose.Schema({
    social_links: {
        type: Object,
        required: true,
        trim: true,
    },
    sectionHeaders: {
        type: Object,
        required: true,
        trim: true,
    },
    footerHeaders: {
        type: Object,
        required: true,
        trim: true,
    },
    texts: {
        type: Object,
        required: true,
        trim: true,

    },



}, { collection: "pageData", timestamps: true });
module.exports = mongoose.model("pageDataSchema", pageDataSchema);