var pessoa = require("./commons/pessoa.js");

Marcos = pessoa();

console.log(JSON.stringify(Marcos));

//commons carros.js

var carros = require("./commons/carros.js");

corsa = carros();

console.log(JSON.stringify(corsa));

//commons soma.js

console.log(soma(10,20)); 