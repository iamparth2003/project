const express = require("express");
const mongoose = require("mongoose");

const app = express();


const PORT = 3000;

mongoose.connect("mongodb+srv://parthasodariya14:parth2003@cluster0.feisyeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(result=>{
    app.listen(PORT)
    console.log(`server is running on ${PORT}...`);
}).catch(err=>{
    console.log(err);
})