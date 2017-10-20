app.factory("server",["ajaxserver",function(ajaxserver){
    var factory={
        getinfoarr1:function(){
            var arr1=ajaxserver.ajax("get","http://localhost:8080/?data");
            return arr1;
        },
        getinfoarr2:function(){
            var arr2=ajaxserver.ajax("get","http://localhost:8080/?data2");
            return arr2;
        },
    };
    return factory;
}]);