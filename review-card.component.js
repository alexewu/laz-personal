(function() {

    var app = angular.module("soundBlog");

    app.component('reviewCard', {
       templateUrl: '/review-card.html',
       controller: 'reviewCardController'
    });

    app.controller('reviewCardController', reviewCardController);

    reviewCardController.$inject = ["musicService"];

    function updateSpotifyContent(data) {
        var ctrl = this;
        console.log(data);
        ctrl.imageURL = data;
    }

    function reviewCardController(musicService) {
        var ctrl = this;
        //TODO: ask why this function does not work
        function updateReviewContents(data) {
            ctrl.date = data["data"]["created_at"];
            ctrl.reviewType = data["data"]["review_type"];
            ctrl.author = data["data"]["name"];
            ctrl.bodyText = data["data"]["body_text"];
            var dataForSpotify = {
                "uri": data["data"]['music_id'],
                "type": data["data"]["review_type"]
            };
            return dataForSpotify;
        }

        musicService.getPostInfo(postId)
            .then(updateReviewContents)
            .then(function (dataForSpotify) {
                musicService.getMusicInfo(dataForSpotify["uri"], dataForSpotify["type"])
                    .then(function (data) {
                        ctrl.imageURL = data["data"]["images"][0]["url"];
                        ctrl.musicName = data["data"]["name"];
                    });
            });
    }
})();