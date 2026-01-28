require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

const {PositionsModel } = require("./model/PositionsModel");

mongoose.connect(uri).then(() => {
  console.log("Database is ready");
});

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [

//   {
//     product: "CNC",
//     name: "AMD",
//     qty: 3,
//     avg: 142.75,
//     price: 139.20,
//     net: "-2.49%",
//     day: "-1.18%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "INTC",
//     qty: 5,
//     avg: 38.45,
//     price: 41.30,
//     net: "+7.41%",
//     day: "+0.95%",
//     isLoss: false,
//   },
//   {
//     product: "MIS",
//     name: "AAPL",
//     qty: 2,
//     avg: 176.20,
//     price: 187.45,
//     net: "+6.38%",
//     day: "-0.84%",
//     isLoss: false,
//   },
//   {
//     product: "CNC",
//     name: "TSLA",
//     qty: 1,
//     avg: 245.60,
//     price: 218.75,
//     net: "-10.93%",
//     day: "+0.92%",
//     isLoss: true,
//   },
//   {
//     product: "MIS",
//     name: "MSFT",
//     qty: 1,
//     avg: 395.40,
//     price: 412.30,
//     net: "+4.27%",
//     day: "+0.62%",
//     isLoss: false,
//   },
//   {
//     product: "CNC",
//     name: "NVDA",
//     qty: 1,
//     avg: 560.80,
//     price: 594.60,
//     net: "+6.03%",
//     day: "+2.10%",
//     isLoss: false,
//   },
//   {
//     product: "MIS",
//     name: "META",
//     qty: 2,
//     avg: 502.30,
//     price: 485.20,
//     net: "-3.41%",
//     day: "-0.45%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "NFLX",
//     qty: 1,
//     avg: 575.90,
//     price: 558.40,
//     net: "-3.04%",
//     day: "-1.02%",
//     isLoss: true,
//   },
//   {
//     product: "MIS",
//     name: "GOOGL",
//     qty: 3,
//     avg: 145.10,
//     price: 151.80,
//     net: "+4.62%",
//     day: "-0.09%",
//     isLoss: false,
//   },
//   {
//     product: "CNC",
//     name: "JPM",
//     qty: 4,
//     avg: 168.90,
//     price: 172.35,
//     net: "+2.04%",
//     day: "+0.48%",
//     isLoss: false,
//   },

//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product:item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss:item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
