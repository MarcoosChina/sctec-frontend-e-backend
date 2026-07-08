//receber uma frase digitada pelo usuário
//receber uma palavra digitada pelo usuário
//verificar se a palavra digitada pelo usuário está contida na frase digitada pelo usuário
//se existir escreva no console "Palavra encontrada"
//se nao existir escreva no console "Palavra não encontrada"

let frase =  "Aula de JavaScript"
let palavra = "JavaScript"

if (frase.includes(palavra)){
    console.log("Palavra encontrada");
}
else{
    console.log("Palavra não encontrada");
}