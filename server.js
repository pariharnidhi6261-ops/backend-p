//server create

// const express = require('express');


// const app = express();

// app.get("/about", (req, res) => {
//     res.send("Hello World ")
// })


// app.listen(3000);

require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

 connectDB();



app.listen(3000, () => {
    console.log("server is running on port 3000");
})

