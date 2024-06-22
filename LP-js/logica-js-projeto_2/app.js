const possibilities = 10;
let numbersPlayed = [];
let guesses = 1;
let secretNumber = generateSecretNumber();

function initialText() {
	showText("h1", "Secret Number Game");
	showText("p", `Guess a number between 1 and ${possibilities}`);
}initialText();

function showText(tag, text) {
	let field = document.querySelector(tag);
	field.innerHTML = text;
	responsiveVoice.speak(text, "UK English Female", {rate:1.2});
}

function generateSecretNumber() {
	let randomNumber = Math.floor(Math.random() * possibilities) + 1;
	if(numbersPlayed.length == possibilities) {
		numbersPlayed = [];
	}
	if (numbersPlayed.includes(randomNumber)) {
		return generateSecretNumber();
	}
	console.log("Secret number is: " + randomNumber);
	return randomNumber;
}

function newGame() {
	secretNumber = generateSecretNumber();
	numbersPlayed.push(secretNumber);
	guesses = 1;
	
	initialText();
	document.getElementById("reiniciar").setAttribute("disabled", true);
}

function clearField() {
	document.querySelector("input").value = "";
}

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
