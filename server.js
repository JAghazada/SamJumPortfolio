require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const Routes = require("./routes/index");
const connect = require("./db/connection/connect");
const { fetchAllData } = require("./cache/fetchData");


const app = express();



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", Routes);
app.use(require("cors")());
(async () => {
    const connection = await connect();
    const data = await fetchAllData();
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    });
})();

