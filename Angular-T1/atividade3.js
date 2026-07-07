//receba o email do usuário
//extraia o nome do usuário e exiba o nome do usuario do email (todo valor antes do)
//no console

let = email = "marcos@gmail.com";

let usuarioSplit = email.split('@')[0];
let usuarioSubstring = email.substring(0, email.indexOf('@'));
console.log(email.split('@')[0]);

console.log(usuarioSplit);
console.log(usuarioSubstring);
