
var app = angular.module('myApp', []);

app.controller('myController', ['$scope', function ($scope) {
  $scope.val = 0;
  $scope.test = 'hi';
}]);

app.directive('sharedScope', function() {
  return{
    scope: false, // shares with parent, true is one-way data-binding, inheriting from parent, then changes parent - true creates a new instance of scope
    link: function (scope, elem, attrs) {
      scope.val = 20;
    }
  };
}); // inherits and returns back to parent controller

app.directive('inheritedScope', function() {
  return{
    scope: true, // scope is local, does not affect parent
    link: function (scope, elem, attrs) {
      scope.val = 25;
    }
  };
}); // takes scope from parent

app.directive('isolatedScope', function(){
  return{ //
    scope: {},
    link: function(scope, elem, attrs){
      scope.val = 30;
    }
  };
}); // separate from parent scope

app.directive('isolatedScopeTakeTwo', function(){
  return{
    scope: {val:'@'}, // what happens when you change the '@' to '='
    link: function(scope, elem, attrs){
      scope.val = 40;
    }
  };
}); // two way data binding using '=', one way with '@'
