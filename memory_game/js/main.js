console.log("Up and running!");

// Array of Objects
var cards = [ 
{
   rank : 'queen',
   suit : 'hearts',
   cardImage : 'images/queen-of-hearts.png'
},

{
   rank : 'queen',
   suit : 'diamonds',
   cardImage : 'images/queen-of-diamonds.png'
},

{
   rank : 'king',
   suit : 'hearts',
   cardImage : 'images/king-of-hearts.png'
},

{
   rank : 'king',
   suit : 'diamonds',
   cardImage : 'images/king-of-diamonds.png'
}
];
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

 console.log("User flipped " + cards[cardId].rank); 
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch();
}

