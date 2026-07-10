//gerar numero aleatório de 1 a 100 
//pedir ao usuario para tentar adivinhar o numero via prompt
//caso acertar, finalizar o programa
//caso errar, informar se o numero é maior ou menor que o numero digitado
const prompt = require('prompt-sync')();

let numAleatorio = Math.round(Math.random() * 100 + 1);
let numeroUsuario = parseInt(prompt("Tente adivinhar o número entre 1 e 100:"));

while(numeroUsuario != numAleatorio){
    numeroUsuario  > numAleatorio ? console.log("O número é menor que " + numeroUsuario) : console.log("O número é maior que " + numeroUsuario);
    numeroUsuario = parseInt(prompt("Tente adivinhar o número entre 1 e 100:"));
}

console.log("Parabéns! Você acertou o número " + numAleatorio);