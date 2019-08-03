//******************************************************************************
var path = require('path')
//******************************************************************************
//*************** ADD all your server/controllers/.js Here *********************
// var appointments = require("./../controllers/appointments.js")
var questions = require("./../controllers/questions.js")
var users = require("./../controllers/users.js")

module.exports = function(app){
//******************************************************************************
  console.log('config/routes.js!');
//******************************************************************************
//change routes & friendS.function
//******************************************************************************
  app.get('/questions', function(req, res) {
    console.log("config/routes.js show all")
    questions.index(req, res);
  });

  app.get('/users', function(req, res) {
    console.log("config/routes.js show all")
    users.index(req, res);
  });

  app.post('/questions/new', function(req, res) {
    console.log("config/routes.js create")
    questions.create(req, res);
  });

  app.post('/users/new', function(req, res) {
    console.log("config/routes.js create")
    users.create(req, res);
  });
//******************************************************************************
}
//******************************************************************************
