require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");


app.get("/allHoldings",async(req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});
app.get("/allPositions",async(req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});



mongoose.connect(uri).then(() => {
  console.log("Database is ready");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
