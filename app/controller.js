angular.module('now-playing.controller', [])

    .controller('MoviesCtrl', ['$scope', 'response',
        function ($scope, response) {
            $scope.movies = response.data.results;
        }
    ])

    .controller('MovieCtrl', ['$scope', 'response',
        function ($scope, response) {
            $scope.movie = response.data;
        }
    ]);