
function createCards(array, i) {
  return `
<div class="card" data-id="">
<img class="default" src="/images/logo.png" />
<img class="flipped" src=""/>
</div>
<div class="card" data-id="">
<img class="default" src="/images/logo.png" />
<img class="flipped" src=""/>
</div>`
}

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

function startGame(images) {
  const gameBoard = document.querySelector(".game-board")
  for (var i = 0; i < images.length; i++) {
    gameBoard.innerHTML += createCards(images, i)
  }

  const idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
  let previous, current
  let isRevelead, disable = false
  const cards = [...document.querySelectorAll('.card')]
  const flippedCards = [...document.querySelectorAll('.flipped')]

  function handleClick() {
    if (disable || this === previous) return
    this.classList.add('flip')
    if (!isRevelead) {
      isRevelead = true
      previous = this
      return
    }
    current = this
    previous.dataset.id === current.dataset.id ? killCard() : resetCards()
  }

  function killCard() {
    previous.removeEventListener('click', handleClick)
    current.removeEventListener('click', handleClick)
    clear()
  }

  function resetCards() {
    disable = true
    setTimeout(() => {
      previous.classList.remove('flip')
      current.classList.remove('flip')
      clear()
    }, 800)
  }

  function clear() {
    isRevelead = false
    disable = false
    previous = null
    current = null
  }
  shuffle(idArray)

  cards.forEach((card, i) => {
    card.addEventListener('click', handleClick)
    let randNum = idArray[i]
    randomImage = images[randNum]
    card.dataset.id = randNum
    flippedCards[i].setAttribute("src", randomImage)
  })
}
