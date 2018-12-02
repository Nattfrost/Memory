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


cardElts.forEach((card, i) => {
  const img = cardsArray[i%(cardsArray.length)];
  const imageTag = [...document.querySelectorAll('.cardImg')];
  imageTag[i].setAttribute("src", "images/"+img.img);
  card.dataset.id = i%(cardsArray.length)+1;
  const cardId = card.dataset.id;
  console.log(card.dataset.id);

  card.addEventListener('click', () => {
    console.log('i was clicked '+cardId);

  })
});
