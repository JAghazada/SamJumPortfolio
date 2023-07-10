const Router = require("express").Router();
const PageRoutes = require("./page.routes");
const WorkRoutes = require("./work.routes");
const MailRouters = require("./mail.routes")

Router.use(PageRoutes);
Router.use(WorkRoutes)
Router.use(MailRouters)


module.exports = Router;
