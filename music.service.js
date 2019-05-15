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
                    "Authorization": "Bearer BQBC5jLmeRDSnraAopnYN-pApfI_moUBnJTEQlcazo_i9FJPfM5SL1cbD41Pu2wVqeDyXGMHXF8OOiFcvAUEzpGR6PXEGd_mlC5TpmTenUXu45_FrTPHaNNfi6c25jfHGWrUleb0fg7JU64tD8EhyS37ijy2hxiJ2hf54UX05R_OfYOOkcxtSzQJXDCYprxS_yy73FoikfRE--NM0efLI6ZdDCtQuV1dXwSmFNv6EYxYF-KztlFOxksXHOpbNPU6uTfBiJ-2C0VLpf4"
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