//EXEMPLO WHILE

const prompt = require('prompt-sync')();

let numero = prompt('Digite um numero: ');
let soma = 0;
let contador = 1;

while (soma < numero) {
  soma = soma + contador;
  contador += 1;
}

console.log(`Contador: ${contador} | Soma: ${soma}`);