var myApp = angular.module("myApp",[]);
myApp.controller("packFile",["$scope",function($scope)
{
	$scope.starts = "search firstName";
	$scope.ends = "search lastName";
	var peopleList = 
	[
		{
			first:"FANG",
			last:"vane",
			gender:"Male",
			salary:"11",
			price:"11",
			birthday:"2007-07-11"
		},
		{
			first:"SARA",
			last:"rose",
			gender:"Female",
			salary:"22",
			price:"22",
			birthday:"1997-02-03"
		},
		{
			first:"AAM",
			last:"hot",
			gender:"Male",
			salary:"33",
			price:"33",
			birthday:"1986-03-04"
		},
		{
			first:"MARK",
			last:"bear",
			gender:"Male",
			salary:"44",
			price:"44",
			birthday:"1986-03-22"
		}
	];
	$scope.peopleList = peopleList;
	$scope.searchText = "";
	$scope.searchTest = "";

	//模糊匹配
	$scope.search = function(obj)
	{
		if($scope.searchText != "")
		{
			if(obj.first.toLowerCase().indexOf($scope.searchText) != -1)
			{
				return true;
			}else
			{
				return false;
			}
		}else if($scope.searchTest != "")
		{
			if(obj.last.toLowerCase().indexOf($scope.searchTest) != -1)
			{
				return true;
			}else
			{
				return false;
			}
		}else
		{
			return true;
		}
	}

	//添加类名
	$scope.or = true;		//添加小三角的根据
	$scope.hide = false;	//初始状态
	$scope.ishas = function(events)
	{
		console.log(events.target);
		if($scope.hide)
		{
			$scope.hide = true;
			$scope.or = false;
			$(events.target).addClass("top");
		}else
		{
			$scope.or = false;
		}
	}

	//排序
	$scope.rank = "";
	$scope.argen = false;

}])
// ng-class="{true:'buttom',false:'top'}[or]"