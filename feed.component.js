(function() {

    var app = angular.module("soundBlog");

    app.component('feed', {
        templateUrl: '/feed.html',
        controller: 'feedController'
    });

    app.controller('feedController', feedController);
    app.filter('authorFilter', authorFilter);

    feedController.$inject = ["musicService"];

    function feedController(musicService) {
        var ctrl = this;

        musicService.getUsers()
            .then(function (data) {
                ctrl.users = data["data"];
            })
            .then(function () {
                angular.forEach(ctrl.users, function(user) {
                    user["on"] = false;
                });
            });


        musicService.getLastFiveReviews()
            .then(function(data) {
               ctrl.postIds = data["data"];
            });

    }

    function authorFilter() {
        return function(input, authors) {
            if(!authors || authors.length === 0) return input;
            var out = [];
            angular.forEach(input, function(item) {
                angular.forEach(authors, function(author) {
                    if (item.user_id === author.user_id) {
                        out.push(item);
                    }
                });
            });
            return out;
        }
    }
})();