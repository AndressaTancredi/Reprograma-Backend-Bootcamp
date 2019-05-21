let juros = document.querySelectorAll(".juros"); 

for(var i=0; i<juros.length; i++){

    // console.log(alunos[i]); Pegar CADA aluno
    var dinheiro = juros[i];
    
    var dinheiroTd = dinheiro.querySelector(".info-dinheiro");
    var dinheiro = dinheiroTd.textContent;

    var taxaTd = dinheiro.querySelector(".info-taxa");
    var taxa = taxaTd.textContent;

    var tempoTd = dinheiro.querySelector(".info-tempo");
    var tempo = tempoTd.textContent;

    var jurosTotalTd = dinheiro.querySelector(".info-juros");
    var jurosTotal = calculaMedia(dinheiro,taxa,tempo);
    jurosTotalTd.textContent = jurosTotal.toFixed(2);
}
function calculaJuros(dinheiro,taxa,tempo){
    jurosTotal = (parseFloat(dinheiro) * parseFloat(taxa) * parseFloat(tempo));
    return jurosTotal.toFixed(2);
}

function calculaMontante(dinheiro,jurosTotal){
    montante = (parseFloat(dinheiro) + parseFloat(jurosTotal));
    return montante.toFixed(2);
}