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
                    "Authorization": "Bearer BQAI-WZHyVodHhujz8YLEBI-ajOR79jZt-dcMUdFAUj3H-0eYn2g0__GE7bP9h_gv7u_7FVOQ2uhyi5jZfzcmAfTs3I7ZW37T1Jt2j9AxHdoUKWgo_VXeBA9W3ARkL3r_fnRpo65JuzKjyfT1mtH_E5LydagmgmQ9fzxcpgEAmGDYQbpIfidBKKzOC3gW67Sras5_YCM1dsYZqUTEgziB_fmuCl5a9zj5UsTYo9DeAQvFyaskS_JJVGG4-ib5M4Hxy7v-jXOuj5GtS4"
                }
            };

            return $http(req);
        }

        function getLastFiveReviews() {
            return $http.get("/main/feedContent/");
        }

        return {
            getMusicInfo: getMusicInfo,
            getPostInfo: getPostInfo,
            getLastFiveReviews: getLastFiveReviews
        }
    }
})();