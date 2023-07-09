const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true,
        trim: true,
    },
    project_description: {
        type: String,
        required: true,
        trim: true,
    },
    project_tags: {
        type: Array,
        required: true,
        trim: true,
    },
    project_link: {
        type: String,
        required: true,
        trim: true,

    },
    project_img_link: {
        type: String,
        required: true,
        trim: true,
    }


}, { collection: "works", timestamps: true });
module.exports = mongoose.model("projectSchema", projectSchema);