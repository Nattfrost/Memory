const cardsArray = [{
    img: "1.png"
  },
  {
    img: "2.png"
  },
  {
    img: "3.png"
  },
  {
    img: "4.png"
  },
  {
    img: "5.png"
  },
  {
    img: "6.png"
  },
  {
    img: "7.png"
  },
  {
    img: "8.png"
  },
];


const shuffledArray = [];
const cardElts = [...document.querySelectorAll('.card')];
const imageTag = [...document.querySelectorAll('.cardImg')];
let current, previous;

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    let rand = Math.floor(Math.random() * array.length);
    if (!shuffledArray.includes(rand)) {
      shuffledArray.push(rand);
    } else {
      i--;
    }
  }
  return shuffledArray;
}

shuffle(cardsArray);


cardElts.forEach((card, i) => {
  const len = i % (cardsArray.length);
  const img = cardsArray[len];
  imageTag[i].setAttribute("src", "images/" + img.img);

  card.dataset.id = len + 1;
  const cardId = card.dataset.id;

  //handle clicks
  card.addEventListener('click', handleClick);


  function handleClick() {
    card.classList.add('clicked');
    console.log('i was clicked ' + cardId);
    //handle matches
    previous = current;
    current = cardId;
    if (previous == cardId) {
      console.log('match')
      let matches = document.querySelectorAll(`[data-id="${previous}"]`);
      matches.forEach(matched => {
        matched.classList.add('matched');
        matched.removeEventListener('click', handleClick);
      })
    } else if (previous !== cardId && current !== previous) {

      let nonMatches = document.querySelectorAll(`[data-id="${previous}"]`);
      nonMatches.forEach(notMatched => {
        notMatched.classList.remove('clicked');
      })
    }
  }
});
