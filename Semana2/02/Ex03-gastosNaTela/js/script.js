// Coletar o elemento botao
var botao = document.querySelector('.transacao__button')

botao.addEventListener('click',function(evento){
    evento.preventDefault(); 
    // 1 - Inputs (elementos no DOM)
    var inputTransacao = document.getElementById('transacaoInputName');
    var inputValor = document.querySelector('#transacaoInputMoney');
    var inputData = document.getElementById('transacaoInputDate');
    
    // 2 - Valores dos inputs
    var valorTransacao = inputTransacao.value;
    var valorValor = inputValor.value;
    var valorData = inputData.value;
    
    // 3 - Tabela de Transações
    var linha = document.createElement("tr");
    
    // Primeiro criar a coluna
    var colunaTransacao = document.createElement("td") 
    // Segundo conteúdo da linha
    colunaTransacao.textContent = valorTransacao 
    // Terceiro adotar a coluna
    linha.appendChild(colunaTransacao)
    
    var colunaValor = document.createElement("td")
    colunaValor.textContent = valorValor
    linha.appendChild(colunaValor)
    
    var colunaData = document.createElement("td")
    colunaData.textContent = valorData
    linha.appendChild(colunaData)
    
    var tabela = document.querySelector(".extrato__body")
    tabela.appendChild(linha)
    
    // Mudando a cor de fundo 
    // var corpo = document.querySelector("body")
    // corpo.style.backgroundColor = "purple";
    var corpo = document.querySelector("body")
    if (valorValor>0 && valorValor<=10){
        corpo.style.backgroundColor = "green";
    }else if (valorValor>10 && valorValor<=50){
        corpo.style.backgroundColor = "orange";
    }else if (valorValor>50){
        corpo.style.backgroundColor = "red";
        alert("Miga sua loka para de comprar");
    }

    // Para apagar o texto que o usuário escreveu tem duas formas
    // inputTransacao.value = ""
    // inputValor.value = ""
    // inputData.value = ""
    
    // Essa também apaga o que o usuario escreveu
    document.querySelector(".transacao__form").reset();
    
})








