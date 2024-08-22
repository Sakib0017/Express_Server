const mongoose = require('mongoose');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const db = async () =>{
    try {
        await mongoose.connect(mongoURI);
        console.log('Connection Successfull')
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}
module.exports = db;