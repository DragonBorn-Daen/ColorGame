var colors= gen(6);

var squares= document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("blah");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numsq=6;
hardBtn.classList.add("selected");
colorDisplay.textContent= pickedColor;

resetbutton.addEventListener("click",function(){

pickedColor= pickColor();
colorDisplay.textContent= pickedColor;
resetbutton.textContent= "NEW colors";
for (var i = 0; i < squares.length; i++) 
	squares[i].style.backgroundColor= colors[i];
document.querySelector("h1").style.backgroundColor= "rgb(0,170,216)";
blah.textContent =null;
} 
	)

easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
colors=[];
numsq=3;
colors=gen(3);
pickedColor=pickColor();
colorDisplay.textContent= pickedColor;
for (var i = 0; i < squares.length; i++) {
 if(colors[i]){
 squares[i].style.backgroundColor=colors[i];}
 else squares[i].style.backgroundColor=null;
}
});

hardBtn.addEventListener("click",function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numsq=6;
colors=gen(6);
pickedColor=pickColor();
colorDisplay.textContent= pickedColor;
for (var i = 0; i < squares.length; i++) {

 squares[i].style.backgroundColor=colors[i];}
 
});



colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function () {
		var clickedColor= this.style.backgroundColor;
	   if(clickedColor === pickedColor)
	   {
	   	
	   	resetbutton.textContent= "Play Again!";
	   	changeColors(clickedColor);
	   	document.querySelector("h1").style.backgroundColor= clickedColor;
	   	blah.textContent="YOU GOT IT RIGHT!!!";
	   }
	   else 
	   	{this.style.backgroundColor= "#232323";
        blah.textContent="WRONG!!!";
	     }
	});
}

function changeColors(color){
 for (var i = 0; i <numsq; i++) {
 squares[i].style.backgroundColor= color;
 }
}


function pickColor(){
return  colors[Math.floor(Math.random()*colors.length)];
}

function gen(num)
{ var arr= []

for (var i = 0; i < num; i++) {
	arr[i]= randcolor();
}
	return arr;
}

function randcolor()
{ var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}
