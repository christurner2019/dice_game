// Object: Using six dice, varying from 4 sides to 9 sides, each player rolls all 6 dice a total of 5 times. 
// After all 5 rolls, the highest cumulative score wins. 

// Each die will have a 1 on a face and each face will have the next consecutive number depending on how many 
// sides. 
// Example: 4 sided dice will have numbers 1 through 4 on the faces, 5 sided dice will have 
// numbers 1 through 5 on the faces, etc. 


// Example: Player 1 rolls all 6 dice by clicking the "Roll" button: 
// the die faces show 5, 4, 3, 8, 7 , 7. Total of this is 34.
// Player will roll 4 more times and the total score of all die faces is Player's score. 

// to make this happen:
// 1. I need to add a click-button that will randomly generate a value on each face to signify a roll. 
//    The click button will keep track of the number of rolls: Roll 1, Roll 2, etc. 
// 2. I need to create 6 dice that match the faces I need. (have 6 numbers pop up on the screen signifying the result of each rolled die.)
// 3. After the fifth click (or roll) I need the total of all the values added together for a final score. 
// 4. I need a second roller to go through the same process. 
// 5. I need the higher score to be shown as the winner, either Player 1, or Player 2. 



"use strict"

let randomDice1; //this is the dice-random number generator. global variable right? need to move under a function?
//const numberOfRolls; // this is the prompt for player to click and roll. 
					//global variable right? need to move under a function? Can I just set this to 5 right now as that will be the constant value, unchanging (immutable?)?

//numberOfRolls = prompt('You will roll the dice 5 times and the total of the 5 rolls will be your final score.');

//commits?
//for simplicity sake, functionality of doing both player 1 and 2s rolls immediately, display total and winner and game over. 


function playerTurn(){
	let myArray = [];
	for (let i=4; i<=9; i++){
		myArray.push(rollDie(i));
		// console.log(myArray);
	}
	let arraySum = calcRoll(myArray);
	// console.log(arraySum);
	return arraySum;
}
function calcRoll(array){
	let sum = 0;
	for(let i = 0; i < 6; i++){
		sum += array[i];
	}
	return sum;
}
function fiveDiceRolls(number){
	let finalSum = 0;
	for(let i = 0; i < 5; i++){
		finalSum += playerTurn();
	}
	console.log("Player " + number + " score = " + finalSum); 

	return finalSum;  //I want this to display (Player 1 score = ??)
}
function rollDie(n){
	let result = Math.ceil(Math.random()* n);
	return result;
}

//how to add exact same coding as above to run Player 2s turn, take both totals and declare winner. 

//Player 2's "turn", will auto run, no prompt from player 2 needed.



function runGame(){
	console.log("Welcome to my game! This is a 2 player game. Each player will roll a total of 5 times. 6 dice, ranging from 4 faces to 9 faces,  will roll each time.\
				 The total of all rolls will result in a players score." +" Highest score wins.");  
	//rules maybe

	//player1 turn x 5
	let player1Rolls = fiveDiceRolls(1);

	let player2Rolls = fiveDiceRolls(2);

		console.log(Math.max(player1Rolls, player2Rolls));

	//player2 turn x 5

	//add player1 score up

	//add player2 score up

	//compare scores  (If player1>player2 "Player 1 wins!!" if not true, else? If player2>player1 "Player 2 wins!!")

	//who won??
	//will player2 have to initiate anything, or do we just refresh page and cycle through both throws? much simpler to cycle both players roll all with one refresh. 
	//player1 and player2 can decide which one they want to be before hitting refresh to determine who is who.

}
runGame();