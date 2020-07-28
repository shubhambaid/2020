const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path= require("path");
var cookieParser = require('cookie-parser');

//process.env


//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

if(process.env.NODE_ENV === "production"){
    //serve static content
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname), "client/build/index.html/");
})

app.listen(PORT, () =>{
    console.log("server has started on port " + PORT);
})