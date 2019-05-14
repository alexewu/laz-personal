// TODO: make this function compatible with different post ids
AjaxCalls.getPostInfo(5)
    .then(function(data) {
        $("#Name").text(data["name"]);
        $("#ReviewType").text(data["review_type"]);
        $("#Date").text(data["created_at"]);
        $("#Body").text(data["body_text"]);
        getAlbumInfo(data["music_id"]);
    });

function getAlbumInfo(uri) {
    AjaxCalls.getAlbumInfo(uri).then(function(data) {
        $("#AlbumName").text(data["name"]);
        $("#AlbumCover").attr('src', data["images"][0]["url"]);
    });
}
