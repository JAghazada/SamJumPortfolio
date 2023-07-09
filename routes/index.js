const Router = require("express").Router();
const PageRoutes = require("./page.routes");
const WorkRoutes = require("./work.routes");


Router.use(PageRoutes);
Router.use(WorkRoutes)

module.exports = Router;
