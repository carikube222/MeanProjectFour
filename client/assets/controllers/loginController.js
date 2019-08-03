app.controller('loginController', function($scope, $location, usersFactory) {
  $scope.currentUser = ''
  $scope.users =[];
  $scope.currentUser = usersFactory.getcurrentUser();
  console.log($scope.currentUser)
  if ($scope.currentUser == undefined){
    console.log("Here?")
    $scope.addUser = function(){
      console.log("howabouthere?")
      console.log($scope.newUser)
      $scope.currentUser = $scope.newUser;
      console.log($scope.currentUser);
      usersFactory.setcurrentUser($scope.currentUser);
      console.log("come here?");
      $location.path('/dashboard');
    }
  }
})

  // appointmentsFactory.index(function(data) {
  //   $scope.appointments = data;
  //   console.log("how about here?")
  // });
