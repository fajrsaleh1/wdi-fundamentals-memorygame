console.log("Up and running!");
// Array of cards
var cards = ["queen","queen","king","king"];
// an empty array to hold the cards
var cardsInPlay = []; 

var checkForMatch = function(){
	 //check the user selected two cards
 if(cardsInPlay.length === 2){ 
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");

	} else {
		alert("Sorry, try again");

	}
}
 }

var flipCard = function(cardId){	

 console.log("User flipped " + cards[cardId]); 
 cardsInPlay.push(cards[cardId]);
 checkForMatch();
}

