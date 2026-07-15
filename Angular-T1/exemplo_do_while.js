const prompt = require('prompt-sync')();

let senha;

do{
    senha = prompt("Digite a senha: ");
    console.log("Senha incorreta");
}while (senha != "1234");

console.log("Senha correta!");