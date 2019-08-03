//***********************************************************************
//**************************** console.log current model name ***********
console.log("1. models/question.js")
//***********************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  question: {type: String, required: [true, "can't be empty"], minlength: [15, 'question must be at least 15 characters long']},
  answer: {type: String, required:[true, "can't be empty"]},
  fakeone: {type: String, required:[true, "can't be empty"]},
  faketwo: {type: String, required:[true, "can't be empty"]}
}, {timestamps: true})
mongoose.model('Question', QuestionSchema);
