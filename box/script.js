for(var i = 2; i < 300; i++) {
	document.querySelector(".container").innerHTML += "<div class='box'></div>";
}

var arrayOfBoxes = document.querySelectorAll(".box")

for(var i = 0; i < arrayOfBoxes.length; i = i + 2) {
	arrayOfBoxes[i].style.background = "lightpink";
}
for(var i = 1; i < arrayOfBoxes.length; i = i + 2) {
	arrayOfBoxes[i].style.background = "lightblue";
}