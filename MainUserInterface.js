AjaxCalls.getFeed()
    .then(function (data) {
        let divBeg = "<div class='singlePost'>";
        let divEnd = "</div>";
        let br = "<br>";
        for(let i = 0; i < data.length; i+=1)
        {
            let name = getSongAlbumName(data[i]["music_id"], data[i]["review_type"]);
            console.log(name);
            //let header="<h3>"+getSongAlbumName(data[i]["music_id"])+"</h3>";
            let p1="<p>"+data[i]["name"]+"</p>";
            let p2="<p>"+data[i]["body_text"]+"</p>";
            let p3="<p>"+data[i]["created_at"]+"</p>";
            //let img=$("<img/>").attr({
            //    id:"AlbumCover",
            //    alt: "Album Cover goes here",
            //    class: "AlbumCover",
            //    src: getImageURL(data[i]["music_id"], data[i]["review_type"])
            //});
            $("#mainFeed").append(divBeg+p1+p2+p3+divEnd+br+br);
        }
    });

function getImageURL (uri, type) {
    AjaxCalls.getMusicInfo(uri, type).then(function(data) {
        if(type === "album")
            return data["images"][0]["url"];
        else
            return data["album"]["images"][0]["url"];
    });
}

function getSongAlbumName (uri, type) {
    AjaxCalls.getMusicInfo(uri, type).then(function(data) {
        console.log(data["name"]);
        return data["name"];
    });
}