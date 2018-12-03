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
let idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
const cardElts = [...document.querySelectorAll('.card')]
const imageElts = [...document.querySelectorAll('.cardImg')]
let current, previous
//fisher yates //
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
shuffle(idArray)
cardElts.forEach((card, i) => {
  let randNum = idArray[i]
  randomImage = cardsArray[randNum].img
  imageElts[i].setAttribute("src", randomImage)
  card.dataset.id = randNum + 1
  //handle clicks
  card.addEventListener('click', function handleClick(event) {
    card.classList.add('clicked')
    cardId = card.dataset.id
    previous = current
    current = cardId
    if (previous == cardId) {
      event.target.classList.toggle('matched')
      let matches = document.querySelectorAll(`[data-id="${previous}"]`)
      matches.forEach(matched => {
        matched.classList.add('matched')
        matched.classList.remove('clicked')
        matched.removeEventListener('click', handleClick)
      })
    } else if (previous !== cardId && current !== previous) {
      let nonMatches = document.querySelectorAll(`[data-id="${previous}"]`)
      nonMatches.forEach((notMatched) => {
        notMatched.classList.remove('clicked')
      })
    }
  })
})
