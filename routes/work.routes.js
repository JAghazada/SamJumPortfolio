const router = require("express").Router();
const { WorkController } = require("../controllers/work.controllers");

const { v4: uuidv4 } = require('uuid');
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "views/assets/uploads")
    },
    filename: (req, file, cb) => {
        const projectID = uuidv4();
        const projectName = req.body["project_name"];
        const fileExtension = path.extname(file.originalname);
        req.body.projectID = projectID
        const uniqueSuffix = projectName + "_" + projectID + fileExtension;
        req.body.project_img_link = uniqueSuffix
        cb(null, uniqueSuffix)
    }
})
const upload = multer({ storage });
router.post("/add-work", [(req, res, next) => {
    if (!req.files || !req.files.length) {
        return next();
    }
}, upload.single("image")], WorkController);


module.exports = router