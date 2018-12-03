
  var api = "https://api.giphy.com/v1/gifs/search?";
  var apiKey = "&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY";
  var query = "&q=fart";
  var url = api + apiKey + query;

  fetch(url).then(response => {
    return response.json()
  }).then(response => {
    let gifArray = [];
    for (var i = 0; i < 8; i++) {
      result = response.data[i].images.downsized.url
        gifArray.push(result);
    }
  startGame(gifArray);
  })
