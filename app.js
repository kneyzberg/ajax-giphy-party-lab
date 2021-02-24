console.log("Let's get this party started!");



$("#submitBtn").on("click", getGif);
$("#removeBtn").on("click", removeGifs);

async function getGif () {
    let $searchTerm = $("#giphyInput").val();
    let giphyResponse = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {api_key: "o3XM3W1BHhTlDMKbn8ZRXz7XqWK4Pvju", q: $searchTerm}})
    let gif = randomGif(giphyResponse.data.data);   
    appendGif(gif);
}

function randomGif(giphyArr){
    return giphyArr[Math.floor(Math.random() * giphyArr.length)];
}

function appendGif(gif) {
    $("#giphy-holder").append(`<img src=${gif.images.fixed_height.url}>`);
}

function removeGifs() {
    $("#giphy-holder").empty();
}