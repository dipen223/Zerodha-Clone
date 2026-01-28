const {Schema} = require("mongoose");

const WatchListSchema = new Schema({
    name: String, 
    price: Number,
    percent: String,
    isDown: boolean,
})


module.exports = {WatchListSchema};