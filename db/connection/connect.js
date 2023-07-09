const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const DB_URI = process.env.DB_URI;
const connect = async () => {
    mongoose.set("strictQuery", true);
    const connection_result = await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return connection_result

};
module.exports = connect;