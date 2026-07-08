//receber um numero digitado pelo usuario e verificar se ele é par ou impar
var numero = prompt("Digite um número: ");

if (numero % 2 === 0){
    console.log("O número " + numero + " é par ");
}else{
    console.log("O número " + numero + " é impar ");
}