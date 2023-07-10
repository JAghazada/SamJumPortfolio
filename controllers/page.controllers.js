const { getFetchedData, fetchAllData } = require("../cache/fetchData");
const pageDataModel = require("../db/models/pageDataModel")

const HomePageController = (req, res) => {
    const { pageData, works } = getFetchedData();
    res.render("home", {
        pageData: pageData[0], works
    });

}
const AdminController = (req, res) => {
    const { pageData } = getFetchedData();

    res.render("admin", {
        pageData: pageData[0]
    })
}
const WorkPageController = (req, res) => {
    const { works } = getFetchedData();
    res.render("works", { works })
}
const PageDataController = async (req, res) => {
    const { social_links, sectionHeaders, footerHeaders, texts } = req.body;

    await pageDataModel.findOneAndDelete({}, { sort: { "createdAt": -1 } });
    const new_Page_Data = new pageDataModel({
        social_links,
        sectionHeaders,
        footerHeaders,
        texts
    });

    await new_Page_Data.save();
    await fetchAllData();


    res.json({
        message: "Successful",
        succeeded: true,
        code: 802
    });

}
module.exports = {
    HomePageController, AdminController, PageDataController, WorkPageController
}