'strict mode';

app.controller("booksCtrl", function($scope){

  $scope.title = "Top Sellers in Books";
  $scope.promo = "book of the month";

  $scope.products = [
    {
      name: 'AngularJS up & running',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/angularJS.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Javascript',
      price: 28,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/javascript.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Javascript The Good Part',
      price: 10.99,
      pubdate: new Date('2000', '08', '01'),
      cover: 'img/AngularJS2.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Best program ever',
      price: 39,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/javascript.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Javascript and Jquery',
      price: 280,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/javascript.png',
      likes: 0,
      dislikes: 0
    }
  ];

  $scope.plusOne = function(index){
    $scope.products[index].likes += 1;
  }

  $scope.minusOne = function(index){
    $scope.products[index].dislikes += 1;
  }

});
