const app = document.getElementById("root");

const request = new XMLHttpRequest();
request.open("GET","https://randomuser.me/api/?results=10",true); 

request.onload = function(){
    const data = JSON.parse(this.response); 
        console.log(data)

    if(request.status >=200 && request.status <400){
        console.log("SUCESSO!")

        console.log(data.name)
        console.log(data.location)

        //Criar h1
        let titulo = document.createElement("h1");
        titulo.innerHTML = "Colaboradores";
        app.appendChild(titulo);  

        //Criar authors
        let authors = document.createElement("div");
        authors.setAttribute("class","authors"); 
        app.appendChild(authors);

        for (let i=0; i<data.length; i++){
        //Criar o card
        let card = document.createElement("div");
        card.setAttribute("class","card"); 
        authors.appendChild(card);

        //Criar a art (imagem)
        let picture = document.createElement("img")
        picture.setAttribute("src", data.picture);
        card.appendChild(picture);

        //Criar h2
        let name = document.createElement("h2");
        name.innerHTML = data.name;
        card.appendChild(name); 

        //Criar h3
        let location = document.createElement("h3");
        location.innerHTML = data.location;
        card.appendChild(location); 

        //Criar p
        let email = document.createElement("p");
        email.innerHTML = data.email;
        card.appendChild(email); 

        //Criar p
        let phone = document.createElement("p");
        phone.innerHTML = data.phone;
        card.appendChild(phone); 

        }

}else{
    console.log("ERRO!")
}
}
request.send() //Enviar a requisição