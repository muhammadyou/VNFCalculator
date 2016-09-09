angular.module('myApp',['MyControllers', 'MyServices', 'ngMaterial', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'chart.js', 'ngTable', 'nvd3', 'angular-svg-round-progressbar'])
    .run(function($rootScope, $window){
        $window.scrollTo(0, 50);
    })

    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider

            .state('main', {
                views: {
                    'startView': {
                        templateUrl: 'templates/main.html',
                        controller: 'HomeCtrl as vm'
                    }
                },

                resolve : {
                    carouselSlides : function(Carousel, $q){
                        var defer = $q.defer();
                        Carousel.slides().then(function(response){ //fetch data from service
                            defer.resolve(response); //and resolve returned data so page can continue to load.
                        })
                        return defer.promise; // we say to browser hey wait we are waiting something. just keep this promise as  a tip. lol
                    },
                    IntelBarData : function(IntelBar, $q){
                        var defer = $q.defer();
                        IntelBar.data().then(function(response){ //fetch data from service
                            defer.resolve(response); //and resolve returned data so page can continue to load.
                        })
                        return defer.promise; // we say to browser hey wait we are waiting something. just keep this promise as  a tip. lol
                    }
                }
            })



            .state('home', {
                url: '/home',
                views: {
                    'startView' : {
                        templateUrl: 'templates/home.html'
                    }
                }

            })




        $urlRouterProvider.otherwise('/home');
    });

