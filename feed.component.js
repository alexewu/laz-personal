(function() {

    var app = angular.module("soundBlog");

    app.component('feed', {
        templateUrl: '/feed.html',
        controller: 'feedController'
    });

    app.controller('feedController', feedController);

    feedController.$inject = ["musicService"];

    function feedController(musicService) {
        var ctrl = this;

        musicService.getLastFiveReviews()
            .then(function(data) {
               ctrl.postIds = data["data"];
            });
    }
})();