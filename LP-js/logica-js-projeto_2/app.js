function initialText() {
	showText("h1", "Secret Number Game");
	showText("p", "Chose a number between 1-10");
}initialText();

function showText(tag, text) {
	let field = document.querySelector(tag);
	field.innerHTML = text;
}

function generateSecretNumber() {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log("Secret number is: " + randomNumber);
	return randomNumber;
}

function newGame() {
	secretNumber = generateSecretNumber();
	guesses = 1;
	initialText();
	document.getElementById("reiniciar").setAttribute("disabled", true);
}

function clearField() {
	document.querySelector("input").value = "";
}

let guesses = 1;
let secretNumber = generateSecretNumber();

function checkGuess() {
	let guess = document.querySelector("input").value;
	if (guess == secretNumber){
		showText('h1', "Congratulations!");

		let guessWord = guesses == 1 ? "guess" : "guesses";
		let message = `You guessed the secret number in ${guesses} ${guessWord}!`;
		showText(`p`, `${message}`);
		document.getElementById("reiniciar").removeAttribute("disabled")
	}
	else {
		if(guess > secretNumber) {
			showText('p', "Try again! The secret number is lower");
		}
		else {
			showText('p', "Try again! The secret number is higher");
		}
		guesses++;
	}
	clearField();
}
