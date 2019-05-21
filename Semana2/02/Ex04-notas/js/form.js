var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //Evita o comportamento padrão do botão que seria recarregar a página e limpar o formulário, substitui pelo que eu colocar abaixo, poderia ser um console.log. Ao invés de recarregar ele vai aparecer minha mensagem.
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var nota1 = form.notaum.value;
    var nota2 = form.notadois.value;

    //Criar linhas
    var alunoTr = document.createElement("tr");
    alunoTr.setAttribute("class","aluna");

    var nomeTd = document.createElement("td");
    var nota1Td = document.createElement("td");
    var nota2Td = document.createElement("td");
    var mediaFinalTd = document.createElement("td");

    nomeTd.textContent = nome;
    nota1Td.textContent = nota1;
    nota2Td.textContent = nota2;
    mediaFinalTd.textContent = calculaMedia(nota1,nota2);

    //Colocando o td dentro do tr
    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nota1Td);
    alunoTr.appendChild(nota2Td);
    alunoTr.appendChild(mediaFinalTd);

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});

//Remover linha com duplo clik e add efeito de desaparecer depois de determinado tempo.Não esquecer de add classe fadeOut no css.
var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});