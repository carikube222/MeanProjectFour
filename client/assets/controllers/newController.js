//***********************************************************************
app.controller('newController', function($scope, usersFactory, questionsFactory, $location) {
  $scope.currentUser = ''
  $scope.users =[];
  $scope.questions=[];
  $scope.currentUser = usersFactory.getcurrentUser();
  console.log('new Controller Loaded');
  console.log($scope.currentUser);

  $scope.create = function(){
    $scope.hasErrors=[];
    var question = $scope.newQuestion.question;
    var answer = $scope.newQuestion.answer;
    var fakeone = $scope.newQuestion.fakeone;
    var faketwo = $scope.newQuestion.faketwo;

    if (question.length < 15){
      $scope.hasErrors.push("question needs to be min 15 characters")
    }

    // $scope.newUser.name = $scope.currentUser;
    questionsFactory.create($scope.newQuestion, function (data) {
      if (data.errors) {
        $scope.errors = data.errors;
        console.log($scope.errors);
      } else {
        console.log(data)
        console.log("Got saved");
        $scope.newQuestion = {};
			  $location.path('/tests');
		    }
      })
    }
//***********************************************************************
})
//***********************************************************************
