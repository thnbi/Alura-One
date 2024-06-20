alert("Boas vindas ao jogo do numero secreto!");

let n = parseInt(prompt("Digite o número máximo para o intervalo:"));
let secretNumber = Math.floor(Math.random() * n) + 1;

console.log(secretNumber);
let number = parseInt(prompt("Digite um número:"));

for (let i = 1; secretNumber != number && i <= Math.floor(Math.log2(n)); i++) {
	if (number === secretNumber) {
		alert("Parabéns, você acertou!");
		break;
	} else if (number > secretNumber) {
		number = parseInt(prompt("O número secreto é menor. Tente novamente:"));
	} else {
		number = parseInt(prompt("O número secreto é maior. Tente novamente:"));
	}
}
alert("O número secreto era: " + secretNumber);
