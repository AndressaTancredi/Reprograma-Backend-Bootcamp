var mensagem = document.querySelector('.mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
       mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
})