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

const cardElts = [...document.querySelectorAll('.card')];
const imageTag = [...document.querySelectorAll('.cardImg')];

let current, previous;

cardElts.forEach((card, i) => {
  const len = i%(cardsArray.length);
  const img = cardsArray[len];
  imageTag[i].setAttribute("src", "images/"+img.img);

  card.dataset.id = len+1;
  const cardId = card.dataset.id;

  //handle clicks
  card.addEventListener('click', () => {
    console.log('i was clicked '+cardId);
  //handle matches
  previous = current;
  current = cardId;
  if (previous == cardId) {
    console.log('match')
    let matches = document.querySelectorAll(`[data-id="${previous}"]`);
    matches.forEach(matched => {
      matched.classList.add('matched');
    })
  }
  })

});
