

 function letterGen() {
 		var text = "";
 		var possible = "abcdefghijklmnopqrstuvwxyz";
 	
 	// for (var i = 0; i < 1; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  	return text;

}



 var winCount = 0;
 var lossCount = 0;
 var secretLetter = letterGen();
 var guessRemain = 9;
 // var input = userInput;+);
console.log(secretLetter);

// document.getElementById("demo").onkeypress = function() {myFunction()};
document.getElementById("userKey").onkeyup = function (x) {


var letter = String.fromCharCode(x.keyCode).toLowerCase();
alert('You chose ' + letter);

testInput(letter);

};
function testInput(str) {
	alert('The computer chose ' + secretLetter);
	
	if (secretLetter === str) {
		// win();
  // } else {
  // 	lose()
   // }
	alert("You win!");
	winCount++;
	console.log(winCount);
	document.getElementById("winNumber").innerHTML = winCount;}

	else {
		guessRemain--;
		alert(guessRemain + ' guesses Remain');
		// document.getElementById("winNumber").innerHTML = winCount;
		if (guessRemain <= 0) {
			alert ('You lose!');
		};
  };
};

// document.getElementById("demo").onkeypress = function() {myFunction()};

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// // }
// function userInput(


	
    // document.getElementById("userKey").onkeyup;
    // return input;



//     document.getElementById("demo").style.backgroundColor = "red";


