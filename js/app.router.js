angular.module('App')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) 
{
	$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // Home ========================================
    .state('home',
    {
        url: '/',
        views: {
            "menu": {
                templateUrl: "views/shared/menu.html",
                controller: "MenuController as m"
            },
            "principal": {
                templateUrl: "views/home/principal.html",
                controller: "HomeController as p"
            },
        }
    })
    .state('sobre',
    {
        url: '/sobre',
        views: {
        	"menu": {
                templateUrl: "views/shared/menu.html",
                controller: "MenuController as m"
            },
            "principal": {
                templateUrl: "views/sobre/principal.html",
                controller: "SobreController as p"
            }
        }
    })
    .state('contato',
    {
        url: '/contato',
        views: {
        	"menu": {
                templateUrl: "views/shared/menu.html",
                controller: "MenuController as m"
            },
            "principal": {
                templateUrl: "views/contato/principal.html",
                controller: "ContatoController as p"
            }
        }
    })
}]);