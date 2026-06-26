// JSON - JavaScript Object Notation
const produto = [
    {id: 1, nome: "Notebook", preco: 2500.00},
    {id: 2, nome: "Smartphone", preco: 1500.00},
    {id: 3, nome: "Tablet", preco: 1000.00},
]

// Convertendo o objeto para JSON
const produtosJSON = JSON.stringify(produto);
console.log(produtosJSON);
// Convertendo o JSON para objeto
const produtosObj = JSON.parse(produtosJSON);
console.log(produtosObj);