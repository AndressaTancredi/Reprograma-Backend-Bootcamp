const app = document.getElementById("root");
const container = document.createElement("div"); 
container.setAttribute("class","container"); 
app.appendChild(container);

const request = new XMLHttpRequest();
/*
POST   Insert/Creat   - Creates a new resource.
GET    Select/Request - Retrieves a resource.
PUT    Update         - Updates an existing resource.
DELETE                - Deletes a resource. */

// Assíncrona = executa varias ações ao mesmo tempo
request.open("GET","https://ghibliapi.herokuapp.com/films",true); 

request.onload = function(){
    const data = JSON.parse(this.response); //Traduzir a string para JSON
    console.log(data)
    console.log(data[0].title) //Pegar somente o título da PRIMEIRA posição

/* Para saber o status da requisição faço uma função:
Status 	Definição
200 	Sucesso
201 	Criado
301 	Movido Permamentemente 
304 	Não Modificado 	
400 	Requisição Incorreta 
401 	Não Autorizado 	
404 	Recurso não encontrado 	
500 	Erro Interno no Servidor */

    if(request.status >=200 && request.status <400){
        console.log("SUCESSO!")
        for (let i=0; i<data.length; i++){
            console.log(data[i].title) //Acessar a propriedade da array
            console.log(data[i].description)
          
            //Criar o card
            let card = document.createElement("div");
            card.setAttribute("class","card"); //Add um atributo e valor
            container.appendChild(card);
            //Criar o títilo
            let title = document.createElement("h1");
            title.innerHTML = data[i].title; //inner = dentro (<h1>INSIRA AQUI DENTRO</h1>)
            card.appendChild (title);
            //Criar a descrição
            let description = document.createElement("p");
            description.innerHTML = data[i].description;
            card.appendChild (description);
          }
    }else{
        console.log("ERRO!")
    }
}
request.send() //Enviar a requisição