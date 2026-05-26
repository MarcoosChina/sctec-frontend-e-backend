const carros = ["Ferrari", "Lamborghini", "Porsche", "Bugatti", "McLaren"];
const conteudo = document.getElementById("conteudo");

//o código deverá utilizar a estrutura do while
//mostrar um carro por iteração, e perguntar se deseja continuar para o próximo carro
//parar o loop quando o usuário não quiser mais continuar.

i = 0;
resposta = "sim";
do{
    var resposta = prompt("Deseja ver o próximo carro? (sim/não)");
    if (resposta === "sim") {
        conteudo.innerHTML += "<p>" + carros[i] + "</P>";
        i++;
    }
    else{
        break;
    }
}while(resposta === "sim");

//let indice = 0;
//let resposta = "sim";

//while (indice < carros.length && resposta === "sim") {
//    conteudo.innerHTML += `<p>${carros[indice]}</p>`;
//    indice++;
//    if (indice < carros.length) {
//        resposta = prompt("Deseja ver o próximo carro? (sim/não)");
//    }
//}

