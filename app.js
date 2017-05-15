angular.module("aixianfeng",['ngRoute','angularCSS','me-lazyload','homeModule','shopcarModule','mineModule','marketModule'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.otherwise({redirectTo:'/home'})
}])


