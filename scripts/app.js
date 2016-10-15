var app = angular.module("todoListApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'mainCtrl',
      templateUrl: 'views/home.html'
    })
    .when('/books', {
      controller: "booksCtrl",
      templateUrl: "views/books.html"
    })
    .when('/contact', {
      templateUrl: "views/contact.html"
    })
    .otherwise({
        templateUrl : "views/home.html"
    });
});
