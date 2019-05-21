(function() {

    var app = angular.module("soundBlog");


    musicService.$inject = ['$http'];
    app.service("musicService", musicService);

    function musicService($http) {
        function getPostInfo(postId){
            return $http.get("/main/review/getPostInfo" + postId);
        }

        function getMusicInfo(uri, type){
            let url;
            if(type === "album") {
                url = "https://api.spotify.com/v1/albums/";
            }
            else {
                url = "https://api.spotify.com/v1/tracks/";
            }

            var req = {
                url: url + uri,
                type: "GET",
                dataType: "json",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer BQAECjnzuumZi6lG6r2G1NgqlvdNgGqpDKlszoO-8jLAC6XJ3DLVPWcBkxmJUpwX1WeV8qkreOP4KbOKiZcHi6H2BFgXCfP2VXDOrbaKoIYxO6S2tkG7v8II7C0YvW3swoKc063HAzn6P7qmQ3iiVAj7P4nsyr-fGDphADmdwvS5kJzt08PoqqKKHZ9bn-iDWPLQDaY01d1iMcuCcgEdxShhseozz7VWAhO5jrmmaiEDJdRriy3w1EVjmCYKTQmY1GgSYpfgMuQ7vhY"
                }
            };

            return $http(req);
        }

        function getLastFiveReviews() {
            return $http.get("/main/review/getLastFivePostIds/");
        }

        function getUsers() {
            return $http.get("/main/users/getUsers");
        }

        function createPost(review_type_in, spotify_uri_in, user_id_in, created_at_in, body_text_in) {
            var data = {
                review_type: review_type_in,
                music_id: spotify_uri_in,
                user_id: user_id_in,
                created_at: created_at_in,
                body_text: body_text_in
            };

            $http.post("/main/review/postReview/", data,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(){
                return;
            });
        }

        return {
            getMusicInfo: getMusicInfo,
            getPostInfo: getPostInfo,
            getLastFiveReviews: getLastFiveReviews,
            getUsers: getUsers,
            createPost: createPost
        }
    }
})();