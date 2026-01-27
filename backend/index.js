require('dotenv').config();
const express  = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();


mongoose.connect(uri).then(()=>{
    console.log("Database is ready");
})
app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
});


