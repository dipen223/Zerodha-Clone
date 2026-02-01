const {model} = require("mongoose");

const {UserSchema}  = require("../schemas/UserSchema");

const User =   model("user",UserSchema);

module.exports = {User};