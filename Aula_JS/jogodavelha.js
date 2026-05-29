const celulas = document.querySelectorAll('.celula');
console.log(celulas);

let jogadorAtualX = true;

document.getElementById('reiniciar').addEventListener('click', iniciarJogo);

function iniciarJogo(){
    celulas.forEach(celula => {
        celula.textContent = '';
        celula.addEventListener('click', tratarClique, {once:true});
    });
}

function tratarClique(evento){
    evento.target.textContent = jogadorAtualX ? 'X' : 'O';
    jogadorAtualX = !jogadorAtualX;
}

iniciarJogo();
