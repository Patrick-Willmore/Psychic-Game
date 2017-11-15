

 	function letterGen() {
 		var text = "";
 		var possible = "abcdefghijklmnopqrstuvwxyz";
 	
 	for (var i = 0; i < 1; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  	return text;
  }

}

console.log(letterGen());

 var winCount = 0;
 var lossCount = 0;

 // var input = userInput;

// document.getElementById("userKey").onkeypress function (userInput) {




	// return winCount;


// };


// document.getElementById("demo").onkeypress = function() {myFunction()};

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// // }
// function userInput(


	
    // document.getElementById("userKey").onkeyup;
    // return input;

// };
function userInput() {
	document.getElementById("winNumber").innerHTML = winCount;
	if (letterGen() == userInput()) {
	
	winCount++;}

//     document.getElementById("demo").style.backgroundColor = "red";
};
console.log(winCount);
