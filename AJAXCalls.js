class AJAXCalls {
    static get_post_info (post_id) {
        return $.ajax ({
            url: "/modules/DBGateway.class.php",
            type: "GET",
            dataType: "json",
            data: {"postID": 5}
        }).then(function(response) {
            return response
        })
    }

    static get_album_info (uri) {
        return $.ajax ({
            url: "https://api.spotify.com/v1/albums/" + uri,
            type: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQD3J8E7SSAiunohzInrnlXoFAANbux61R6O97R9WtooO77yqokfYXikQzx_bocqBT_QKIAk6z0H6BK1IxLhVNUfDW0gEZsg77BVk6VNnvEUtdhWbI2XSF5j94SFE-pcJACCzPQn71_O8_b8o-Eff8Jxb9IzkecE6CNQ9oRB8aiveLKTvjynqhidYSO8SlAzyY6PRDQvAGjPFuZ9p3iV_QF9cdbcnoJeV_7s8dIaa4yH8sZqqRdYPomP__XciSr1GojGWjcMOtfFCVo"
            }
        }).then(function(response) {
            return response
        })
    }
}