angular.module("mineModule",[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/mine',{
		templateUrl:'conpons/mine/mine.html',
		controller:'minecontrol',
		css:'conpons/mine/mine.css'
	})
}])
.controller("minecontrol",['$scope',function($scope){
	$scope.name="mine"
}])