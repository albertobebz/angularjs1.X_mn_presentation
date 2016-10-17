var app = angular.module("todoListApp", ["ngRoute", "jcs-autoValidate"]);

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
      controller: "MinMaxCtrl",
      templateUrl: "views/contact.html"
    })
    .otherwise({
        templateUrl : "views/home.html"
    });
});
