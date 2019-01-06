console.log("Up and running!");
// Array of cards
var cards = ["queen","queen","king","king"];
// an empty array to hold the cards
var cardsInPlay = []; 
var cardOne = cards[0];
var cardTwo = cards[2];
// add the first card to cardsInPlay array using Push()
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

//check the user selected two cards
if(cardsInPlay.length === 2){ 
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");

	} else {
		alert("Sorry, try again");

	}
}


