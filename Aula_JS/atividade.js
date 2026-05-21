function calcularDesconto(){
        let valor = document.getElementById("valor").value;
        console.log("valor inserido: ", valor);
        let desconto = document.getElementById("desconto").value;
        console.log("desconto inserido: ", desconto);
        //Cálculo do valor do desconto 
        let valorDesconto = (valor * desconto) / 100;
            if (valor >= 0 && desconto >= 0 && desconto <= 100){
                console.log("Valor do desconto: ", valorDesconto);
                //Exibição do valor do desconto
                document.getElementById("resultado").innerHTML = "Valor do desconto: " + valorDesconto + "%";
                document.getElementById("resultado").style.color = "blue";
                //Exibiçãod o valor final já com o desconto aplicado
                document.getElementById("valorfinal").innerHTML = "Valor final: R$" + (valor - valorDesconto);
                document.getElementById("valorfinal").style.color = "green";
                //porcentagem de desconto aplicado
                document.getElementById("descontofinal").innerHTML = "Porcentagem de desconto aplicado: " + desconto + "%";
                document.getElementById("descontofinal").style.color = "orange";

                alert("Valor do desconto: " + valorDesconto + "\nValor final: R$" + (valor - valorDesconto) + "\nPorcentagem de desconto aplicado: " + desconto + "%");
                //
    }
    else{
        alert("Valor ou desconto inválido! Por favor, insira valores positivos e um desconto entre 0% e 100%.");
    }

}