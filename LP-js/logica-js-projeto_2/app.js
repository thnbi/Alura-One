function showText(tag, text) {
	let field = document.querySelector(tag);
	field.innerHTML = text;
}

showText("h1", "Secret Number Game");
showText("p", "Chose a number between 1-10");

function generateSecretNumber() {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log("Secret number is: " + randomNumber);
	return randomNumber;
}

let secretNumber = generateSecretNumber();

function checkGuess() {
	let guess = document.querySelector("input").value;
	if (guess == secretNumber){
		showText('h1', "Congratulations!");
		showText(`p`, `The secret number was ${secretNumber}`);
	}
	else {
		showText('h1', `Try again! The secret number was not ${guess}`);
	}
}
