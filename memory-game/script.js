const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
   
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// let selectedCard = false;
let firstCard = null;
let secondCard = null;
let matchedCount = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  if (firstCard === null) {
      
    firstCard = event.target;
    event.target.style.backgroundColor = event.target.getAttribute('class');
  } else if (secondCard === null) {
    secondCard = event.target;
    event.target.style.backgroundColor = event.target.getAttribute('class');
    
    match();
  }
}

function match(event) {
  if (firstCard.getAttribute('class') === secondCard.getAttribute('class')) {
    matchedCount += 2;
    firstCard = null;
    secondCard = null;

  } else (
    setTimeout(function(){
      
      firstCard.style.backgroundColor = '';
      secondCard.style.backgroundColor = '';

      firstCard = null;
      secondCard = null;
    }, 1000)
  )
}  

const start = document.querySelector('.start');
const retry = document.querySelector('.retry');

let seconds = 0;

start.addEventListener('click', function click() {
  const timer = setInterval(function(){
    ++seconds;
  const score = document.querySelector('.score');
    score.innerText = `Score : ${seconds}`;
  if (matchedCount === COLORS.length) {
    clearInterval(timer);
    start.removeEventListener('click', click);
    alert(`You Win! Your Score is ${seconds}`);
  }
  }, 1000)
})

retry.addEventListener('click', function reset() {
  window.location.reload();
})


// when the DOM loads
createDivsForColors(shuffledColors);
