app.controller('logoutController', function($scope, $location, usersFactory) {
  $scope.currentUser = ''
  $scope.users =[];
  $scope.currentUser = usersFactory.getcurrentUser();
  console.log($scope.currentUser)
  usersFactory.logout();
  console.log("logout comes here")
  $location.path('/logout');

})
