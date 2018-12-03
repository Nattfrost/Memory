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
const idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

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

let previous, current
let isRevelead, disable = false
const cards = [...document.querySelectorAll('.card')];
const defaultCards = [...document.querySelectorAll('.default')];
const flippedCards = [...document.querySelectorAll('.flipped')];

cards.forEach((card, i) => {
  card.addEventListener('click', handleClick)
  let randNum = idArray[i]
  randomImage = cardsArray[randNum].img
  card.dataset.id = randNum + 1
  cardId = card.dataset.id
  //pushing in images into dom.
  flippedCards[i].setAttribute("src", randomImage)
})

function handleClick() {
  if (disable) return
  if (this === previous) return

    this.classList.add('flip')
    if (!isRevelead) {
      isRevelead = true
      previous = this
      return
    }
    current = this
    handleMatch()
  }

function handleMatch() {
  previous.dataset.id === current.dataset.id ? killCard() : resetCards();
}

function killCard() {
  previous.removeEventListener('click', handleClick);
  current.removeEventListener('click', handleClick);
  clear()
}

function resetCards() {
  disable = true;
  setTimeout(() => {
    previous.classList.remove('flip')
    current.classList.remove('flip')
    clear()
  }, 800);
}

function clear() {
  isRevelead = false
  disable = false
  previous = null;
  current = null;
}

function newGame() {
  //måste sova :)
}
