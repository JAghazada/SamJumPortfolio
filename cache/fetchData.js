const pageDataModel = require("../db/models/pageDataModel");
const projectModel = require("../db/models/projectModel");

let works;
let pageData;
const fetchAllData = async () => {
    works = await projectModel.find().sort({ createdAt: -1 });
    pageData = await pageDataModel.find();
    return works, pageData

}
const getFetchedData = () => {
    return { works, pageData }
}
module.exports = {
    getFetchedData, fetchAllData
}