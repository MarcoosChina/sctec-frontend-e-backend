//solicitar ao usuario dois numeros e uma operação(+, -, *, /)
//realizar a operação e exibir o resultado
//perguntar se o usuario deseja realizar outra operação, caso sim, repetir o processo

const prompt = require('prompt-sync')();

let r;
let continuar;
do{
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));
    let op = prompt("Escolha: + , - , * , /: ");


    switch(op){
        case "+":
            r = num1 + num2;
            console.log(r);
            break;
        case "-":
            r = num1 - num2;
            console.log(r)
            break
        case "*":
            r = num1 * num2;
            console.log(r)
            break
        case "/":
            r = num1 / num2;
            console.log(r)
            break
        default:
            console.log("Operação inválida");
    }
    continuar = prompt("Deseja continuar? (s/n): ");
}while(continuar.toLowerCase() === "s" || continuar.toLowerCase() === "sim");
