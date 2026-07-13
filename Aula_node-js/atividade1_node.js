// Atividade Node.js
//
// Objetivo:
// Criar um pequeno programa em Node que trabalhe com variaveis, condicoes,
// arrays e funcoes.
//
// Tarefa:
// 1. Crie um array com pelo menos 5 nomes de pessoas.
// 2. Percorra esse array e imprima cada nome no terminal.
// 3. Crie uma funcao que receba uma idade e retorne se a pessoa é maior de idade.
// 4. Use essa funcao para testar pelo menos 3 idades diferentes.
// 5. Exiba uma mensagem final informando quantos nomes existem no array.
//
// Regras:
// - Nao apague este enunciado.
// - Complete apenas as partes marcadas com TODO.
// - Tente resolver sem olhar exemplos prontos.

//TODO - 1
console.log("=== Atividade Node.js ===");

const nomes = ["Marcos","Pedro", "Vinicius", "João", "Clara"];

//TODO - 2
for (const nome of nomes){
  console.log(nome)
}

//TODO - 3
function maiorDeIdade(idade){
  return idade >= 18;
}
const idadesTeste = [15,18,19];

for (const idade of idadesTeste) {
  if(maiorDeIdade (idade)){
    console.log("a pessoa é maior de idade")
  }else{
    console.log("a pessoa é menor de idade")
  }
}
//TODO 5
console.log("Qtde nomes:", nomes.length);
console.log("=== Fim da atividade ===");


//adicional (verifica se o carro é caro ou não)
function carrosCaros(precoDocarro){
  return precoDocarro >= 100000
}

const carros = [
  {nome: "corsa", preco: 13000},{nome: "gol", preco: 25000},{nome: "Jetta GLI", preco: 125000}
]
  for (const {nome, preco} of carros){
    if (carrosCaros(preco)){
      console.log("---------------------")
      console.log("nome do carro: ", nome)
      console.log("Preco do carro: ", preco)
      console.log("caro");
    }else{
      console.log("---------------------")
      console.log("nome do carro: ", nome)
      console.log("Preco do carro: ", preco)
      console.log("barato")
    }
  }





