console.log("Let's get this party started!");



$("#submitBtn").on("click", getGif);

async function getGif () {
    let $searchTerm = $("#giphyInput").val();
    let giphyResponse = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {api_key: "o3XM3W1BHhTlDMKbn8ZRXz7XqWK4Pvju", q: $searchTerm}})
    console.log("giphy resp =", giphyResponse);
    let gif = randomGif(giphyResponse.data.data);   
    console.log(gif, "gif");
}
function randomGif(giphyArr){
    return giphyArr[Math.floor(Math.random() * giphyArr.length)];
}