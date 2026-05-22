function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    console.log("Número 1 inserido: ", num1);
    let num2 = parseFloat(document.getElementById("num2").value);
    console.log("Número 2 inserido: ", num2);
    let operador = document.getElementById("operador").value;
    console.log("Operação selecionada: ", operador);
    let resultado;
    switch(operador){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0){
                alert("Erro: Divisão por zero não é permitida!");
                return;
            }
            resultado = num1 / num2;
            break;
        default:    
            alert("Operação inválida! Por favor, selecione uma operação válida.");
            return;
   }
   document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}