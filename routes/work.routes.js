const router = require("express").Router();
const { WorkController } = require("../controllers/work.controllers");

const { v4: uuidv4 } = require('uuid');
const multer = require("multer");
const path = require("path");
const { WorkPageController } = require("../controllers/page.controllers");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "views/assets/uploads")
    },
    filename: (req, file, cb) => {
        const projectID = req.projectID;
        let projectName;
        if (file.originalname.includes("modal")) {
            projectName = "modal"
        } else {
            projectName = "banner"
        }

        const fileExtension = path.extname(file.originalname);
        req.body.projectID = projectID
        const uniqueSuffix = projectID + "_" + projectName + fileExtension;
        cb(null, uniqueSuffix)
    }
})
const upload = multer({ storage });
router.post("/add-work", [(req, res, next) => {
    req.projectID = uuidv4()
    if (!req.files || !req.files.length) {
        return next();
    }
}, upload.array("image", 2)], WorkController);


router.get("/works", WorkPageController)

module.exports = router