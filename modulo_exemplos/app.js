var pessoa = require("./commons/pessoa.js");
var soma = require("./commons/soma.js");
var multiplicacao = require("./commons/multiplicacao.js");

Marcos = pessoa();

console.log(JSON.stringify(Marcos));

//commons carros.js

var carros = require("./commons/carros.js");

corsa = carros();

console.log(JSON.stringify(corsa));
//commons soma.js

console.log(soma(10,20)); 
console.log(multiplicacao(10,10));