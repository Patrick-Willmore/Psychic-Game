

 	function letterGen() {
 		var text = "";
 		var possible = "abcdefghijklmnopqrstuvwxyz";
 	
 	// for (var i = 0; i < 1; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  	return text;
  // }

}

console.log(letterGen());

 var winCount = 0;
 var lossCount = 0;
 var secretLetter = letterGen();
 // var input = userInput;

// document.getElementById("demo").onkeypress = function() {myFunction()};
document.getElementById("userKey").onkeyup = function (x) {

alert(x.keyCode+' '+x.charCode);

x.value = x.charCode.toLowerCase();
//testInput(x.value);
};
function testInput(str) {
	document.getElementById("winNumber").innerHTML = winCount;
	if (secretLetter === str) {
	
	winCount++;}
// };


// document.getElementById("demo").onkeypress = function() {myFunction()};

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// // }
// function userInput(


	
    // document.getElementById("userKey").onkeyup;
    // return input;

// };

//     document.getElementById("demo").style.backgroundColor = "red";
};
console.log(winCount);
