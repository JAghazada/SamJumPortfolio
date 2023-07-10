const router = require("express").Router();
const nodemailer = require("nodemailer");
const { MailController } = require("../controllers/mail.controllers");
router.post('/send-mail', MailController)

module.exports = router