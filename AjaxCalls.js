class AjaxCalls {
    static getFeed () {
        return $.ajax ({
            url: "/main/feedContent/",
            type: "GET",
        }).then(function(response) {
            return response
        })
    }

    static getPostInfo (post_id) {
        return $.ajax ({
            url: "/main/review/" + post_id,
            type: "GET",
        }).then(function(response) {
            return response
        })
    }

    static getMusicInfo (uri, type) {
        let url;
        if(type === "album") {
            url = "https://api.spotify.com/v1/albums/";
        }
        else {
            url = "https://api.spotify.com/v1/tracks/";
        }

        return $.ajax ({
            url: url + uri,
            type: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQACnKyt7rmTrOjZDeF6wRRNI63Fn6dpbZH9Y_IGe0p8hh6yT_0tUYO5rZtf9EVDHC8_fQ3siy5dsw1NqsWQNlAqpjzpCoySNEVYrjPSdSHPqxRLWWNpxr2eLjeZbKGp1_lhozUB2-4ux_8UPbsGA29QNCjAmqUdlO-vffTv7MqfbvoxFHS9UCfdkWrGNp5ttyHCclK0M4vvLjUOochnp-MVAslOFV9QD5AX-1lt0ApUgrUcHfHDJ-k-ljm7LMJmJDq19dvDKfDF-lU"
            }
        }).then(function(response) {
            return response
        })
    }
}