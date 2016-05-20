//By Ryan Chakmak

var div = new Array();

//Creates the button at the top of the page
var button = document.createElement("div");
button.style.marginLeft = "430px";
button.style.marginBottom = "20px";
button.style.backgroundColor = "#FF0000";
button.style.borderRadius = "10%";
button.style.width = "100px";
button.style.height = "50px";
button.style.border = "solid";
button.style.clear = "both";
button.addEventListener("click", function (){reset();}, false);
document.body.appendChild(button);
var squares = 16;


// Generates a new grid
function generate() {
	for (var count1 = 0; count1<squares; count1++){
		div[count1] = new Array();
		for (var count2 = 0; count2<squares+1; count2++){
			div[count1][count2] = document.createElement("div");
			div[count1][count2].style.width = ""+(960/squares)+"px";
			div[count1][count2].style.height =  ""+(960/squares)+"px";
			div[count1][count2].style.border = "solid";
			div[count1][count2].style.backgroundColor = "white";
			div[count1][count2].style.borderWidth = ""+((960/squares)*0.05)+"px";
			div[count1][count2].style.boxSizing = "border-box";
			div[count1][count2].onmouseover = function() {
				var characters = "1234567890ABCDEF".split("");
				var hex = "#";
				if(this.style.backgroundColor === "white"){
					for (var count = 0; count < 6; count++) {
						hex += characters[Math.floor(Math.random()*16)];
					}
					this.style.backgroundColor = hex;
				}
			};

			if (div[count1][count2] === div[count1][squares]){
				div[count1][count2].style.clear = "right";
			} else {
				div[count1][count2].style.float = "left";
			}

			document.body.appendChild(div[count1][count2]);
		}
	}
}

// Clears grid and runs the generate function
function reset() {
	for (var clear1 = 0; clear1 < squares; clear1++){
		for(var clear2 = 0; clear2 < squares+1; clear2++){
			div[clear1][clear2].parentNode.removeChild(div[clear1][clear2]);
		}
	}
	
	squares = parseInt(prompt("How many squares per side would you like?"));

	generate();
}

// Shoutout to StackExchange for helping me understand what's going on here
function changeBackgroundColor() {
	var characters = "1234567890ABCDEF".split("");
	var hex = "#";
	this.style.backgroundColor = blue;
	if(this.style.backgroundColor === "default"){
		for (var count = 0; count < 6; count++) {
			hex += characters[Math.floor(Math.random()*16)];
		}
	}
	
}

generate();
