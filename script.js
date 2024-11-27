let pickedCards = []

let cardsArray = document.getElementsByClassName('card');
let colors = shuffle(["red", "green", "blue", "pink", "orange", "purple", "red", "green", "blue", "pink", "orange", "purple",]);

let lockBoard = false;
let gameOver = false;

let pairesTrouvees = 0;
let tries = 0;

assignColorsToCards(cardsArray,colors);
flipAllCards(cardsArray);


onclick = (event) => {
    console.log("click"); 
    if (lockBoard == false && event.target.classList.contains("flipped")) {
        console.log("card selected");
        pickedCards.push(event.target)
        event.target.classList.remove("flipped");
        if (pickedCards.length == 2) {
            tries++;
            lockBoard = true;
            let Cards = pickedCards;
            if (Cards[0].style.backgroundColor === Cards[1].style.backgroundColor) {
                setTimeout(() => {
                    setCardsState(Cards, "matched");
                }, 750);
                pickedCards = [];
                pairesTrouvees++
                if (pairesTrouvees == 6) {
                    console.log(`You won ! Tries : ${tries}`);
                }
            } 
            else {
                let Cards = pickedCards;
                setTimeout(() => {
                    setCardsState(Cards, "flipped");
                }, 750);
                pickedCards = [];
            }
        }
    }    
};

function setCardsState(pickedCards, state){
    pickedCards.forEach(element => {
        element.classList.add(state);
        lockBoard=false
    });
}

function shuffle(array) {
    for (i = 0; i < 12; i++) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * i);

      // And swap it with the current element.
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

function assignColorsToCards(object, colorArray) {
    for (i=0; i < 12; i++) {
        object[i].style.backgroundColor = colorArray[i];
    }
}

function flipAllCards(object) {
    for (i=0; i < 12; i++) {
        object[i].classList.add("flipped");
    }
}