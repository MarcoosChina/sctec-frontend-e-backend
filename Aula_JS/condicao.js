const carros = ["Ferrari", "Lamborghini", "Porsche", "Bugatti", "McLaren"];

const conteudo = document.getElementById("conteudo");

function criaSecao(titulo, dados){
    const secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dados;
    conteudo.appendChild(secao);
}
var dados = "";
var i = 0;
while (i < carros.length){
    dados += "<p>" + carros[i] + "</p>";
    i ++;
}
criaSecao("Loop while", dados);

dados = "";
i = 0;

do{
    dados += "<p>" + carros[i] + "</p>";
    i ++;
}while (i < carros.length);
criaSecao("Loop do while", dados);



// O código acima cria uma lista de carros de luxo e exibe essa lista
// em um elemento HTML com o id "conteudo". Ele utiliza um loop while 
// para iterar sobre os elementos do array "carros" e construir uma string
//  HTML que é então inserida em um elemento div.

let carro1 = {marca: "Corsa", modelo: "Sedan", ano: 2002};
let carro2 = {marca: "Gol", modelo: "Hatch", ano: 2010};
let carro3 = {marca: "Palio", modelo: "Hatch", ano: 2005};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);
carros2.push(carro3);

