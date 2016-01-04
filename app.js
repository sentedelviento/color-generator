var 
body = document.getElementById("body");
colors = [{ 0: "purple"}, {1: "red"}, {2: "black"}, {3: "green"}, {4: "yellow"}, {5: "white"}];
canvas = document.getElementById("canvas");
button = document.getElementById("button");

function random_number_selector(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function color_selector() {
	var number = random_number_selector(0, colors.length);
	canvas.style.background = colors[number][number];
	console.log("number is " + number);
}

function jscript() {
	button.addEventListener("click", color_selector, true)
	console.log("jscript is running")
}

body.addEventListener("load", jscript, true);
