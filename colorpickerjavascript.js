var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColors = pickColors();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#gameStatus");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");
var h1 = document.querySelector("h1");



easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColors();
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
	pickedColor = pickColors();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
})


/*___________________________________________________________________________________________________*/
	
resetButton.addEventListener("click", function(){
	numSquares = 6;
	color = generateRandomColors(6);
	pickedColor = pickColors();
	colorDisplay.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
});

/*___________________________________________________________________________________________________*/

colorDisplay.textContent = pickedColors;


for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		
		//grab color of clicked square
		//"this" refers to item clicked
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColors
		if(clickedColor === pickedColors){
		  messageDisplay.textContent = "Correct!";
		  resetButton.textContent = "Play"
		  changeColors(pickedColors);
		  h1.style.background = clickedColor;
	    } else {
	    	console.log(pickedColors);
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

function pickColors(){
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