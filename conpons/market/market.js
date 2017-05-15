angular.module("marketModule",[])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/market',{
		templateUrl:'conpons/market/market.html',
		controller:'marketcontrol',
		css:'conpons/market/market.css'
	})
}])
.controller("marketcontrol",['$scope','$http',function($scope,$http){
	$http.get('conpons/market/market.json').success(function(res){
		/*左右商品布置*/
		$scope.arrLeft=res.data.categories;
		
		/*初始化*/
		$scope.arrRight=res.data.products[104749]
		for(var h=0;h<$scope.arrRight.length;h++){
				$scope.arrRight[h].num=0;
			}
		$scope.changeshow=function(id,i){
			$scope.arrRight=res.data.products[id]
			$scope.arrSort=$scope.arrLeft[i].cids
			$scope.isShow=false
			
			for(var h=0;h<$scope.arrRight.length;h++){
				$scope.arrRight[h].num=0;
			}
		}
		/*分类列表-项*/
		$scope.waresSort=function(wares){
			$scope.even=wares
			$scope.isShow=false
		}
		$scope.arrRight=res.data.products[103532]
//		$scope.arrSort=$scope.arrLeft[0].cids
		
		/*分类列表，商品种类*/
		$scope.isShow2=false;
		$scope.zhShow2=function(){
			$scope.isShow=!$scope.isShow
			$scope.isShow2=$scope.isShow
		}
		/*排序列表,销量和价格*/
		$scope.isShow1=false;
		$scope.zhShow1=function(){
			$scope.isShow=!$scope.isShow
			$scope.isShow1=$scope.isShow
		}
		/*排序列表-项*/
		$scope.screeneven=function(sortEven){
			$scope.volume=sortEven
			$scope.isShow=false
		}

		/*右边商品减去*/
		$scope.suanJian=function(h){
			$scope.arrRight[h].num--;
		}
		/*右边商品加加*/
		$scope.suanJia=function(h){
			$scope.arrRight[h].num++;
		}
	})
}])
