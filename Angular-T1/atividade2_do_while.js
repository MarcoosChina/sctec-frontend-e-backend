//ATIVIDADE - ||
//Nesta atividade vamos criar um sistema de cadastro que funcionará da seguinte forma:
//Solicite ao usuário:
//Nome do produto;
//Categoria: E (Eletrônicos), V (Vestuário) ou A (Alimentos); Preço do produto;
//Após essas entradas de dados, o sistema deverá mostrar:
//O nome do produto em letras maiúsculas;
//O nome da categoria;
//Valide se a categoria é válida utilizando switch, se não for válida, exiba: 'Categoria inválida' Exibir se o produto é: Barato (até R$ 50), Médio (até R$ 200) ou Caro (acima de R$ 200) Após a exibição, o sistema deverá perguntar ao usuário se deseja realizar outro cadastro "Deseja cadastrar outro produto? (S/N)"
//O programa deverá continuar utilizando um do...while até que a resposta seja N Ao finalizar, exiba:
//Quantidade de produtos cadastrados. Soma dos preços.
//Média dos preços (2 casas decimais).
//Produto mais caro.
//Quantos produtos pertencem à categoria "Eletrônicos".

const prompt = require("prompt-sync")();

let nomeProduto = "";
let categoria;
let preco;

do {
    nomeProduto = prompt("Digite o nome do produto: ");
    categoria = prompt("Digite a categoria do produto (E, V ou A): ");
    preco = parseFloat(prompt("Digite o preço do produto: "));

    console.log("Nome do produto: " + nomeProduto.toUpperCase());

    switch (categoria.toUpperCase()){
        case "E":
            console.log("Categoria: Eletrônicos");
            break;
        case "V":
            console.log("Categoria: Vestuário");
            break;
        case "A":
            console.log("Categoria: Alimentos");
            break;
        default:
            console.log("Categoria inválida");
    }   

    if (preco <= 50){
        console.log("Produto é barato");
    }else if (preco <= 200){
        console.log("Produto é médio");
    }else{
        console.log("Produto é caro");
    }

    continuar = prompt("Deseja cadastrar outro produto? (S/N): ");

}while(continuar.toUpperCase() === "S");
