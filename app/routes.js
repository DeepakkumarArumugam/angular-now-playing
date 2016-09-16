angular.module('now-playing.routes', ['ngRoute', 'now-playing.controller', 'now-playing.service'])

    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/movies', {
                    templateUrl: 'app/templates/movies.html',
                    controller: 'MoviesCtrl',
                    resolve: {
                        response: ['MovieService',
                            function (movieService) {
                                return movieService.nowPlaying();
                            }
                        ]
                    }
                })

                .when('/movies/:id', {
                    templateUrl: 'app/templates/movie.html',
                    controller: 'MovieCtrl',
                    resolve: {
                        response: ['$route', 'MovieService',
                            function ($route, movieService) {
                                return movieService.movie($route.current.params.id);
                            }
                        ]
                    }
                })

                .otherwise({redirectTo: '/movies'});

            $locationProvider.html5Mode(true);
        }
    ]);