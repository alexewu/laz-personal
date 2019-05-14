class AjaxCalls {
    static getPostInfo (post_id) {
        return $.ajax ({
            url: "Router.php",
            type: "GET",
            dataType: "json",
            data: {
                "function_name": "getPostInfo",
                "data": {
                    "post_id": post_id
                }
            }
        }).then(function(response) {
            return response
        })
    }

    // TODO: should function name be camel case or snake case
    static getAlbumInfo (uri) {
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer BQCJFsT3afMJHcPJQ3VoyUP5M2hkwFxIEmIZU0GsWbV7fje_0xypUXZ6VnlUxzVZVOKVZFtzCgzeRs2a_nzCzdPljP0nXgHjVlaw0unCe6bGYydX1AqyJR65MXusLRsmfKNCTF0j6fJwE1Vdz5rByJiEb3SD4Jv2MP4NKM8SXNUF8Ymu2e4UR6jPveakBRFepUpwkKRJwXMi20h43ulYqP30wb8F-wav7sdnRwWXMvV1zW0T_lZMCQLxSxuCUxcNeu9OhiGXkhSBd0k"
        };
        return $.ajax ({
            url: "Router.php", //used to be "https://api.spotify.com/v1/albums/" + uri
            type: "GET",
            dataType: "json",
            // TODO: should I pass the headers in as data?
            data: {
                "function_name": "getAlbumInfo",
                "data": {"uri": uri, "headers": headers}
            }
        }).then(function(response) {
            return response
        })
    }
}