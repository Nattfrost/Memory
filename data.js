
  var api = "https://api.giphy.com/v1/gifs/search?"
  var apiKey = "&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY"
  var query = "&q=random"
  var url = api + apiKey + query
  fetch(url).then(response => {
    return response.json()
  }).then(response => {
    let rand = Math.floor(Math.random() * 16)
    console.log(rand)
    let gifArray = []
    for (var i = rand; i < (rand + 8); i++) {
      result = response.data[i].images.downsized.url
        gifArray.push(result)
        console.log(i)
    }
  startGame(gifArray)
  })
