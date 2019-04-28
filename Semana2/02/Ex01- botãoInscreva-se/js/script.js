//Buscar a classe que carrega a mensagem no HTML
var mensagem = document.querySelector('.mensagem');

//Buscar a classe que aciona o botão no HTML
var botao = document.querySelector('.button');

//Evento = é executado em consequencia de uma ação - no caso o click do botão e depois a função que será executada.
botao.addEventListener('click',function(evento){

/* O método preventDefault () cancela o evento se for cancelável, o que significa que a ação padrão que pertence ao evento não ocorrerá.
Por exemplo, isso pode ser útil quando:
Clicar em um botão "Enviar" impede que ele envie um formulário
Clicar em um link impede que o link siga o URL */
    evento.preventDefault();

//Criando uma var para add o imput do usuário - email.
    var email = document.querySelector('#newsInputEmail')

//textContent para add a mensagem nova + email
       mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
})
