//***********************************************************************
app.factory('questionsFactory', function($http) {
  console.log('client/questionsFactory.js');
//***********************************************************************
  var questions=[];
  var question = {};
  var factory = {};
  
  factory.index  = function(callback) {
    $http.get('/questions').then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    });
  }

  factory.create = function(newQuestion, callback) {
    question = {question:newQuestion.question, answer:newQuestion.answer, fakeone:newQuestion.fakeone, faketwo:newQuestion.faketwo};
    $http.post('/questions/new', question).then(function(res) {
      console.log("client/questionsFactory.js Create")
      console.log(res);
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

//***********************************************************************
  return factory;
})
//***********************************************************************
