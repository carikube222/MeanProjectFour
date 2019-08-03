//******************************************************************************
app.controller('mainController', function($scope, $location, usersFactory) {
  $scope.currentUser = ''
  $scope.users =[];
  $scope.currentUser = usersFactory.getcurrentUser();
  console.log($scope.currentUser);
  console.log('Main Controller Loaded');

  usersFactory.index(function(data) {
    $scope.users = data;
  })

  usersFactory.index(function(data) {
    $scope.lastuser = data.slice(-1)[0];
    $scope.message.push("YAY", $scope.lastuser.name)
    $scope.message.push("Score", $scope.lastuser.score)
  })


//***********************************************************************
})
//***********************************************************************
