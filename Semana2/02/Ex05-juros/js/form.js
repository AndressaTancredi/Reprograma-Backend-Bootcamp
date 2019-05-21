var botaoAdicionar = document.querySelector("#adicionar-juros");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); 
    
    var form = document.querySelector("#form-adiciona");
    var tabela = obtemDadosDoForm(form);
    var tabelaTr = montaTr(tabela);
    var tabela = document.querySelector("#tabela-juros");
    tabela.appendChild(tabelaTr);
});

function obtemDadosDoForm(form){
    var dados = {
    dinheiro: form.dinheiro.value,
    taxa: form.taxa.value,
    tempo: form.tempo.value,
    jurosTotal: calculaJuros(form.dinheiro.value, form.taxa.value, form.tempo.value),
    montante: calculaMontante(form.dinheiro.value, jurosTotal)
    }
    return dados;
}

function montaTr (tabela){
    var tabelaTr = document.createElement("tr");
    tabelaTr.classList.add("tabela");

    var dinheiroTd = montaTd(tabela.dinheiro, "info-dinheiro");
    var taxaTd = montaTd(tabela.dinheiro, "info-dinheiro");
    var tempoTd = montaTd(tabela.dinheiro, "info-dinheiro");
    var jurosTotalTd = montaTd(tabela.dinheiro, "info-dinheiro");
    var montanteTd = montaTd(tabela.dinheiro, "info-dinheiro");

    dinheiroTd.textContent = tabela.dinheiro;
    taxaTd.textContent = tabela.taxa;
    tempoTd.textContent = tabela.tempo;
    jurosTotalTd.textContent = tabela.jurosTotal;  
    montanteTd.textContent = tabela.montante;
    
    tabelaTr.appendChild(dinheiroTd);
    tabelaTr.appendChild(taxaTd);
    tabelaTr.appendChild(tempoTd);
    tabelaTr.appendChild(jurosTotalTd);
    tabelaTr.appendChild(montanteTd);

    return tabelaTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

