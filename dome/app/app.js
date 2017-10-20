var app=angular.module("myapp",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state("server",{
            url:"/server",
            templateUrl:"content/view/_server.html",
            controller:"servercontroller"
        })
        .state("jinrong",{
            url:"/jinrong",
            templateUrl:"content/view/_jinserver.html",
            controller:"servercontroller"
        });
        $urlRouterProvider.otherwise("/server");
});
