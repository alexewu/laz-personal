AJAXCalls.get_post_info(5)
    .then(function(data) {
        $("#Name").text(data["name"]);
        $("#ReviewType").text(data["review_type"]);
        $("#Date").text(data["created_at"]);
        $("#Body").text(data["body_text"]);
        $("#AlbumCover").text(data["music_id"]);
    });

AJAXCalls.get_album_info("0S0KGZnfBGSIssfF54WSJh").then(function(data) {
    $("#AlbumName").text(data["name"]);
    console.log(data);
});