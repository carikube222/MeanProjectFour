//***********************************************************************
var app = angular.module('app', ['ngRoute']);
//***********************************************************************
  app.config(function ($routeProvider) {
    console.log('client/app.js config routes');
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController',
    })
    .when('/dashboard', {
        templateUrl: 'partials/main.html',
        controller: 'mainController',
    })
    .when('/tests/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController',
    })
    .when('/tests', {
        templateUrl: 'partials/test.html',
        controller: 'testController',
    })
    .when('/logout', {
      templateUrl: 'partials/logout.html',
      controller: 'logoutController'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
