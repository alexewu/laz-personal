(function() {

    var app = angular.module("soundBlog");


    musicService.$inject = ['$http'];
    app.service("musicService", musicService);

    function musicService($http) {
        function getPostInfo(postId){
            return $http.get("/main/review/" + postId);
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
                    "Authorization": "Bearer BQBPWGQuK6QchdYhGKMEjExWVXTs5ZAksTxQQ7k_7vWsKI9VYKFVZR6iR9yltInIGAFc60cG_kp-Upl15VDyPDqm00OcrZnKQlpYR-6QNd2Ozu08qkHSTvfdki02A_4L23muisEOqj_Frq-jlxhtTYIN-yBKXXeOy9MdRW6Lvk057h_5aoylCCTXqjVwpYqktYrXo765t9K5Q8N3Qjmsn7CB_U1MmAPaPC_wWluKwxtgA7ug0E0C5WR_ZNzmnYE3yx2C1DCr8a7sqy8"
                }
            };

            return $http(req);
        }

        function getLastFiveReviews() {
            return $http.get("/main/feedContent/");
        }

        function getUsers() {
            return $http.get("/main/users/");
        }

        return {
            getMusicInfo: getMusicInfo,
            getPostInfo: getPostInfo,
            getLastFiveReviews: getLastFiveReviews,
            getUsers: getUsers
        }
    }
})();