function saudar() {
    const nome = document.getElementById("nome").value;
    const hora = parseInt(document.getElementById("horario").value);
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = saudacaoPersonalizada(nome, hora);
}

function saudacaoPersonalizada(nome, hora){
    if (hora >= 5 && hora < 12){
        return "Bom dia, " + nome + "!";
    }
    else if (hora >= 12 && hora < 18){
        return "Boa tarde, " + nome + "!";
    }
    else{
        return "Boa noite, " + nome + "!";
    }
}