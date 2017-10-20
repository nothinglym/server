app.controller("servercontroller",["$scope","server",function($scope,server){
    server.getinfoarr1().then(function(result){
        $scope.arr1=result.data;
    });
    server.getinfoarr2().then(function(result){
        $scope.arr2=result.data;
    });
}]);