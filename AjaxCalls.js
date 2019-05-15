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
                "Authorization": "Bearer BQCBtmM8TGWKY_t_tCQdUyZr0iJ0n5rylIt7bPWkvgPBk9tl8hoTvH-KlI4S6Npk4C-2OmGky8No6mPzL3VzDaCfTQCzhVRV5aYMMPxUixVKqk3_KSMtfJKFQRdXRfRdwyPH0usQCqSbmLP6qKP1miPMXcFDAgE9jUfTrcgWOpt44mYiVEostA4vJ8zceipQVdxCK_1vt91M1MNTXi46H6HJ3E77Pfqm-N42yblXZR_R4NGBPmqhUHyx9KgGEXXaZnalvKINWdZJqY0"
            }
        }).then(function(response) {
            return response
        })
    }
}