var readsupApp = angular.module('readsupApp', ['ngRoute', 'ng-token-auth']);

readsupApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'loginController'
    })
    
    .when('/register', {
        templateUrl: 'pages/register.html',
        controller: 'registerController'
    })
    
});

readsupApp.controller('mainController', ['$scope', '$auth', function($scope, $auth) {
    
    
    
}]);

readsupApp.controller('registerController', ['$scope', '$auth', function($scope, $auth) {
    
     $scope.registrationForm = {};
     $scope.handleRegistration = function() {
         console.log($scope.registrationForm);
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
          console.log("REGISTRATION SUCCESS");
          console.log(resp);
        })
        .catch(function(resp) {
          // handle error response
          console.log("REGISTRATION Failed");
          console.log(resp);
        });
    };
    
}]);

readsupApp.controller('loginController', ['$scope', '$auth', function($scope, $auth) {
    
    $scope.loginForm = {};
    $scope.handleLogin = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };
    
}]);
