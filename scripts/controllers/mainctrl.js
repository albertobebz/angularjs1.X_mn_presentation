'strict mode';

app.controller("mainCtrl", function($scope, dataService){

  $scope.addTodo = function(){
    var todo = {
      name: "new task",
      date: new Date()
    };
    $scope.todos.unshift(todo);
  }

  dataService.getTodos(function(response){
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  }

  $scope.saveTodos = function(){
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited){
        return todo;
      }
    });
    dataService.saveTodos(filteredTodos);
  }

});
