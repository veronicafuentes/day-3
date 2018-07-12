// if (10 > 5) {
// 	console.log("Math works!");
// } else {
// 	console.log("The condition was false!");
// }


function sign(n) {
	if (n < 0) {
		console.log("Negative");
	} else if (n > 0) {
		console.log("Positive");
	} else if (n === 0) {
		console.log("Zero");
	}
}
// sign(-1);
// sign(0);
// sign(1);


function size(n) {
	if (n > 10) {
		console.log("BIG!");
	} else {
		console.log("small.");
	}
}
// size(11)
// size(-11)


Write a function that takes two arguments and 
returns "same" if the arguments are the same, 
"different" if the arguments are different.

function compare(a, b) {
	if (a === b) {
		console.log("Same.");
	} else {
		console.log("Different.");
	}
}
// compare("Veronica", "Veronica")
// compare("Veronica", "Vithya")

