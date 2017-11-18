function letterGen() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    // for (var i = 0; i < 1; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}

//if either win or lose, reset incorrect guess html, 
//reset secret letter, 
//guesses remain back to 9
var winCount = 0;
var lossCount = 0;
var secretLetter = letterGen();
var guessRemain = 9;
var letter;
// var input = userInput;+);

function resetGame() {
    secretLetter = letterGen();
    guessRemain = 9;
    document.getElementById("wrongGuess").innerHTML = "";
    console.log(secretLetter);
    document.getElementById("guessesRemain").innerHTML = guessRemain;
}


resetGame();
// document.getElementById("demo").onkeypress = function() {myFunction()};
document.onkeyup = function(x) {


    letter = String.fromCharCode(x.keyCode).toLowerCase();
    // alert('You chose ' + letter);

    testInput(letter);

};

function testInput(str) {
    // both win and lose should call global func reset() before exiting
    // lose() aint writ yet

    function win(str) {
        alert('The computer chose ' + secretLetter);
        alert("You win!");
        winCount++;
        console.log(winCount);
        document.getElementById("winNumber").innerHTML = winCount;
    }
    // On okay button for alert, trigger reset?

    function incorrect() { // should call lose() when guessRemain hits 0
        guessRemain--;
        // alert(guessRemain + ' guesses Remain');
        document.getElementById("wrongGuess").innerHTML += str;
        document.getElementById("guessesRemain").innerHTML = guessRemain;
    }

    // make decision whether guess is right
    if (secretLetter === str) {
        win();
        resetGame();
    } else {
        incorrect(str);
        if (guessRemain <= 0) {
            alert('You lose!');
            lossCount++;

            document.getElementById("lossNumber").innerHTML = lossCount;
            document.getElementById("wrongGuess").innerHTML = letter;
            resetGame();
        }
    } // win();
}
/*
 		if (secretLetter === str) {
 			function win(str)  {  
 			    alert('The computer chose ' + secretLetter);
 				alert("You win!");
 				winCount++;
 				console.log(winCount);
 			}	document.getElementById("winNumber").innerHTML = winCount;
 		}

 		else {
 			guessRemain--;
 			// alert(guessRemain + ' guesses Remain');
 			document.getElementById("wrongGuess").innerHTML += letter;
 			document.getElementById("guessesRemain").innerHTML = guessRemain;


 		// document.getElementById("winNumber").innerHTML = winCount;
 			if (guessRemain <= 0) {
 				alert ('You lose!');
 				lossCount++;

 				document.getElementById("lossNumber").innerHTML = lossCount;
 				document.getElementById("wrongGuess").innerHTML = letter;
 			};
 		};
 */



// document.getElementById("demo").onkeypress = function() {myFunction()};

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// // }
// function userInput(



// document.getElementById("userKey").onkeyup;
// return input;



//     document.getElementById("demo").style.backgroundColor = "red";