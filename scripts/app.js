var app = angular.module("todoListApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'mainCtrl',
      templateUrl: 'views/home.html'
    })
    .when('/test1', {
      templateUrl: "views/test.html"
    })
    .otherwise({
        template : "<h1>Nothing has been selected</h1>"
    });
});
