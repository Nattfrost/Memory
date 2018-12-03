const cardsArray = [{
    img: "images/1.png"
  },
  {
    img: "images/2.png"
  },
  {
    img: "images/3.png"
  },
  {
    img: "images/4.png"
  },
  {
    img: "images/5.png"
  },
  {
    img: "images/6.png"
  },
  {
    img: "images/7.png"
  },
  {
    img: "images/8.png"
  },
]

  var api = "https://api.giphy.com/v1/gifs/search?";
  var apiKey = "&api_key=9kJfRi6ip66K2xkxwSKa7ZAyK7H5sjpY";
  var query = "&q=memory";
  var url = api + apiKey + query;

  fetch(url).then(response => {
    return response.json()
  }).then(response => {
    for (var i = 0; i < cardsArray.length; i++) {
      result = response.data[i].images.downsized.url
      console.log(result);
      // cardsArray.push(result);
    }
  })
