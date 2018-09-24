var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#gameStatus");
var resetButton = document.querySelector("#playButton");
var easyBtn = document.querySelector("#easyDifficulty");
var hardBtn = document.querySelector("#hardDifficulty");
var h1 = document.querySelector("h1");
var header = document.getElementById("header");



easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});



hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
})


/*___________________________________________________________________________________________________*/
	
resetButton.addEventListener("click", function(){
	numSquares = 6;
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	header.style.background = "#232323";
});

/*___________________________________________________________________________________________________*/

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		
		//grab color of clicked square
		//"this" refers to item clicked
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColors
		if(clickedColor === pickedColor){
		  messageDisplay.textContent = "Correct!";
		  resetButton.textContent = "Play"
		  changeColors(pickedColor);
		  h1.style.background = clickedColor;
		  header.style.background = clickedColor;
	    } else {
	    	console.log(pickedColor);
	    	console.log(clickedColor);
	     	this.style.background = "#232323";
	    	messageDisplay.textContent = "Try Again";
	    } 
	});
}

/*___________________________________________________________________________________________________*/

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
		squares[i].style.background = color;
	}
}

/*___________________________________________________________________________________________________*/

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}


/*___________________________________________________________________________________________________*/

function generateRandomColors(num){
	var arr = []
	//repeat num of times
	for(var i = 0; i < num; i++){
		arr.push(randomColor())

	}

	return arr;
}

/*___________________________________________________________________________________________________*/

function randomColor(){
	//picks a red, green, and blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return	"rgb(" + r + ", " + g + ", " + b + ")";
}