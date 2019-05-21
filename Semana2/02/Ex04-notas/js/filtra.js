var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var alunos = document.querySelectorAll(".aluna");

    if (this.value.length > 0){
        for (var i = 0; i < alunos.length; i++){
            var aluno = alunos[i];
            var tdNome = aluno.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 
            
            //Esse i é de insensitive case, ou seja - letra maiúscula ou minúscula. Essa expressão vai buscar o nome começando com as primeiras letras e não como antes somente comparando o nome todo.

            if (!expressao.test(nome)) { //testar se o nome do usuário bate com o que foi digitado
                aluno.classList.add("invisivel");
            } else {
                aluno.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.remove("invisivel");
        }
    }
});