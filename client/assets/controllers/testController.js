//***********************************************************************
app.controller('testController', function($scope, usersFactory, questionsFactory, $location) {
  $scope.currentUser = ''
  $scope.users =[];
  $scope.user =""
  // $scope.message =[];
  // $scope.questions=[];
  $scope.currentUser = usersFactory.getcurrentUser();
  console.log('test Controller Loaded');
  console.log($scope.currentUser);

  questionsFactory.index(function(arr) {
    console.log(arr)
    function getRandomArrayElements(arr, count) {
      var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }
    $scope.questions = getRandomArrayElements(arr, 3);
    console.log($scope.questions)
  })

  $scope.radioValue ={};
  $scope.game = function(){
    console.log($scope.radioValue);
    score = 0;
    if($scope.radioValue.one == $scope.questions[0].answer){
      score += 1;
    }
    if($scope.radioValue.two == $scope.questions[1].answer){
      score += 1;
    }
    if($scope.radioValue.three == $scope.questions[2].answer){
      score += 1;
    }
    console.log(score);

    var percentage = Math.floor(score/3 *100) + '%'
    console.log(percentage)
    $scope.currentUser = usersFactory.getcurrentUser();
    var name = $scope.currentUser;
    console.log(name);

    var user = {name:name, score:score, percentage:percentage};
    usersFactory.create(user, function (data) {
      if (data.errors) {
        $scope.errors = data.errors;
        console.log($scope.errors);
      } else {
        console.log(data)
        console.log("This need to happend.");
        $scope.newUser = {};
        // $scope.message.push("YAY", $scope.currentUser.name)
        // $scope.message.push("Score", $scope.currentUser.score)
			  $location.path('/dashboard');
		    }
      })
    }
//***********************************************************************
})
//***********************************************************************
