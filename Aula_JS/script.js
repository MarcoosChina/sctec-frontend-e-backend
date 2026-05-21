function verificaAprovacao(){
    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ",nota);

    if (nota >= 7){
        document.getElementById("resultado").innerHTML = "Aluno aprovado";
        document.getElementById("resultado").style.color = "green";
        alert("Aluno aprovado!");
    }else{
        document.getElementById("resultado").innerHTML = "Aluno reprovado";
        document.getElementById("resultado").style.color = "red";
        alert("Aluno reprovado!");
    }
}