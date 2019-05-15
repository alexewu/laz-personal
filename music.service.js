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
                    "Authorization": "Bearer BQA6VaOUKgIViB12AHfBI6NQbroAA925Gk4ZXcpX6mfAu3PlzRXmbtrmCEmweLiMiBdPwuB-Gr0b9CClADViAxGdGjO-RQvXp8MMCja4tegAMfLiyLiPf00u3sXnwyspTYvkXTpnWyXUZIobrmR2oWGbz637QRfMis3dZzV42dPxnsJdahWD6Fls-zWk70dyc7KDYqm4EXIYQr5aGvslVAIwOHA5uFCtt8WEf4R8HBbYo3-5JYL0nm6YqJchIpYydssA731x25NeG10"
                }
            };

            return $http(req);
        }

        return {
            getMusicInfo: getMusicInfo,
            getPostInfo: getPostInfo
        }
    }
})();