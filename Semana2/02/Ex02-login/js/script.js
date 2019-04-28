var mensagem = document.querySelector('.login__subtitle');

var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    var email = document.querySelector('#loginInputEmail')
    var senha = document.querySelector('#loginInputPassword')

    if(email.value =="" || email.value.length == 0){
        mensagem.textContent = 'Digite um email válido'
        email.focus() //.focus vai fazer com que minha caixa de seleção fique em foco com uma cor de borda
        return

    } else if
//.indexOf Uma string pode ser vista como um array de caracteres, indexado da esquerda para a direita, onde a primeira posição é 0 e última o comprimento da string menos um. No caso do @ nã0 quero um e-mail que comece com @.
        (email.value.indexOf('@')<=0 || email.value.indexOf('@')>=email.value.length-1){
            mensagem.textContent = 'O email informado é inválido'
            return
//Se o valor da senha for vazio ou < 6 será inválida.
    } else if(senha.value =="" || senha.value.length < 6){
        mensagem.textContent = 'A senha informada é inválida'
        return
    }
        mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
})

/* Login
Email regras:
1- Não pode ser vazio
2- Colocar foco na cai de email
3- Não pode começar com @

Senha regras:
1- Não pode ser vazio nem menor que 6 digitos */


