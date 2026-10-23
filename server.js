//server create

// const express = require('express');


// const app = express();

// app.get("/about", (req, res) => {
//     res.send("Hello World ")
// })


// app.listen(3000);



const app = require("./src/app");


app.listen(3000, () => {
    console.log("server is running on port 3000");
})