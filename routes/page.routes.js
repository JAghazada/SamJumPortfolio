const { HomePageController, AdminController, PageDataController } = require("../controllers/page.controllers");

const router = require("express").Router();


router.post("/change-page-data", PageDataController)
router.get("/", HomePageController);
router.get("/api/v1/admin", AdminController)
module.exports = router;
