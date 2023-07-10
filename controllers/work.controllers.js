const { fetchAllData } = require("../cache/fetchData");
const projectModel = require("../db/models/projectModel");

const WorkController = async (req, res) => {
    console.log(req.files);
    if (!req.files || req.files.length === 0 || req.files.length === 1) {
        return res.status(400).json({
            message: "Şəkil yoxdur",
            succeeded: false,
            code: 601
        })
    };
    const { project_name, project_description, project_tags, project_link, projectID } = req.body;

    const savedProject = new projectModel({
        project_name,
        project_description,
        project_tags,
        project_link,
        projectID
    });
    await savedProject.save();
    await fetchAllData();
    res.json({
        succeeded: true,
        message: "Work added",
        code: 802
    })

}
module.exports = {
    WorkController
}