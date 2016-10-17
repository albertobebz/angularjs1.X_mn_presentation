'strict mode';

app.controller("booksCtrl", function($scope){

  $scope.title = "Top Sellers in Books";
  $scope.promo = "Books of the month";

  $scope.products = [
    {
      name: 'Ruby On Rails',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/rails.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Javascript: The Good Parts',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 28,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/javascriptthegood.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'AngularJS',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 10.99,
      pubdate: new Date('2000', '08', '01'),
      cover: 'img/angularJS.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'AngularJS Ninja',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 39,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/angularninja.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Javascript and Jquery',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 280,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/Jquery.jpg',
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
