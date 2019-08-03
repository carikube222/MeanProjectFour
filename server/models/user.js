//***********************************************************************
//**************************** console.log current model name ***********
console.log("1. models/user.js")
//***********************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  score: Number,
  percentage: String,
  createAt: {type:Date, default: Date.now}
})
mongoose.model('User', UserSchema);
