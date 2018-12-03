const gameBoard = document.querySelector(".game-board");

function createCards(array, i) {
    return `<div class="card" data-id="">
            <img class="default" src="/images/default.png" />
            <img class="flipped" src=""/>
            </div>
            <div class="card" data-id="">
            <img class="default" src="/images/default.png" />
            <img class="flipped" src=""/>
            </div>`
  }

for (var i = 0; i < cardsArray.length; i++) {
  gameBoard.innerHTML += createCards(cardsArray, i);
}
