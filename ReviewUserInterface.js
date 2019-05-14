AjaxCalls.getPostInfo(postId)
    .then(function(data) {
        console.log(data["name"]);
        $("#Name").text(data["name"]);
        $("#ReviewType").text(data["review_type"]);
        $("#Date").text(data["created_at"]);
        $("#Body").text(data["body_text"]);
        getMusicInfo(data["music_id"], data["review_type"]);
    });

function getMusicInfo(uri, type) {
    AjaxCalls.getMusicInfo(uri, type).then(function(data) {
        $("#AlbumName").text(data["name"]);
        if(type === "album")
            $("#AlbumCover").attr('src', data["images"][0]["url"]);
        else
            $("#AlbumCover").attr('src', data["album"]["images"][0]["url"]);
    });
}