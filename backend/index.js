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
const {OrdersModel} = require("./model/OrdersModel");


app.get("/allHoldings",async(req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});
app.get("/allPositions",async(req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder",async(req,res) => {
  let newOrder  =  new OrdersModel({
    name: req.body.name, 
    qty:req.body.qty,
    price: req.body.price,
    mode:req.body.mode,

  })
  newOrder.save();
  res.send("order saved");

});
app.post("/sellOrder",async(req,res) => {
  let newOrder  =  new OrdersModel({
    name: req.body.name, 
    qty:req.body.qty,
    price: req.body.price,
    mode:req.body.mode,
  })
  newOrder.save();
  res.send("stock sold");

});


mongoose.connect(uri).then(() => {
  console.log("Database is ready");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
