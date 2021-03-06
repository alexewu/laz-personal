(function() {

    var app = angular.module("soundBlog");

    app.component('reviewCard', {
       templateUrl: '/review-card.html',
       controller: 'reviewCardController'
    });

    app.controller('reviewCardController', reviewCardController);

    reviewCardController.$inject = ["musicService"];


    function reviewCardController(musicService) {
        var ctrl = this;

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

        function updateSpotifyContent(dataForSpotify) {
            musicService.getMusicInfo(dataForSpotify["uri"], dataForSpotify["type"])
                .then(function (data) {
                    ctrl.musicName = data["data"]["name"];
                    if(dataForSpotify["type"] === "album")
                        ctrl.imageURL = data["data"]["images"][0]["url"];
                    else
                        ctrl.imageURL = data["data"]["album"]["images"][0]["url"];
                });
        }

        musicService.getPostInfo(postId)
            .then(updateReviewContents)
            .then(updateSpotifyContent);
    }
})();