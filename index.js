const express = require("express");
const app =express();
const port = process.env.PORT || 3000;
//const connectDb = require("./utils/db")
app.get("/", (req, res) => {
    res.send("Hello, World")
})
app.get("/sakib", (req, res) => {
    res.send("Hello, Sakib")
})
//connectDb().then(() => {
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
    });
//})
