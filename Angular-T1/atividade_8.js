//receba uma letra e diga se é vogal ou consoante
let letra = "z"

switch (letra){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("A letra " + letra + " é uma vogal.")
        break;
    default:
        console.log(` A letra ${letra} é uma consoante. `)
        break;
}