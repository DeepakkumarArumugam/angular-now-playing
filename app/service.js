angular.module('now-playing.service', [])

    .service('MovieService', ['$http',
        function ($http) {
            return {
                nowPlaying: function () {
                    return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cf86200f49581725c527db61a5b017c6');
                },
                movie: function (id) {
                    return $http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=cf86200f49581725c527db61a5b017c6');
                }
            }
        }
    ]);