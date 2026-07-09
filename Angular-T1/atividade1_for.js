//somar os números pares de 1 a 100

// o += faz a mesma coisa que soma = soma + i
// o i += 2 faz a mesma coisa que i = i + 2
let soma = 0;

for (let i = 2; i < 101; i += 2){
    soma += i;
}
console.log('a soma dos números pares de 1 a 100 é: ', soma);


