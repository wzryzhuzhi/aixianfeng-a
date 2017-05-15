angular.module("homeModule",[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'conpons/home/home.html',
		controller:'homecontrol',
		css:'conpons/home/home.css'
	})
}])

.service('swiper',['$timeout',function($timeout){
	$timeout(function(){
		new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay:200,
		    autoplayDisableOnInteraction : false,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    observer:true,
			observeParents:true
		  }) 
	},10);
}])
.controller('homecontrol',['$scope','$http','swiper',function($scope,$http){
	$http.get('conpons/home/home.json').success(function(res){
		$scope.arrSwiper = res.data.act_info[0].act_rows;
		$scope.arrBanmenu = res.data.act_info[1].act_rows;
		$scope.arrMilks = res.data.act_info[3].act_rows;
		$scope.arrAllshop = res.data.act_info[5].act_rows;
		$scope.arrEasy1 = res.data.act_info[4].act_rows[0].act_rows;
		$scope.arrEasy2 = res.data.act_info[4].act_rows[1].act_rows;
		$scope.arrEasy3 = res.data.act_info[4].act_rows[2].act_rows;
		$scope.arrEasy4 = res.data.act_info[4].act_rows[3].act_rows;
	})
	
}])