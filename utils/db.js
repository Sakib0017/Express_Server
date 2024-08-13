const mongoose = require("mongoose");

const URI = "mongodb+srv://sakib-admin:sakib124000@cluster0.x55l3gi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test1";

const connectDb = async () =>{
    try {
        await mongoose.connect(URI);
        console.log('Connection Successfull')
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}
module.exports = connectDb;