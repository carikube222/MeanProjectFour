//***********************************************************************
app.factory('usersFactory', function($http) {
  console.log('client/usersFactory.js');
//***********************************************************************
  var users=[];

  var factory = {};
  var currentUser;

  factory.index  = function(callback) {
    $http.get('/users').then(function(res) {
      if (typeof callback === 'function') {
        // friends = res.data
        // callback(friends)
        callback(res.data);
      }
    });
  }

  factory.show = function(id, callback) {
    $http.get('/users/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    });
  }

  factory.create = function(newUser, callback) {
    user = {name:newUser.name, score:newUser.score, percentage:newUser.percentage};
    $http.post('/users/new', user).then(function(res) {
      console.log("client/usersFactory.js Create")
      console.log(res);
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }

  factory.getcurrentUser = function(){
    return currentUser;
  }

  factory.setcurrentUser = function(user){
    currentUser = user;
  }

  factory.logout = function(){
    currentUser = ''
  }
//***********************************************************************
  return factory;
})
//***********************************************************************
