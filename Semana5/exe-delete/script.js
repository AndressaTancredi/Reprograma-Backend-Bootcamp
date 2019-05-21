fetch ( "https://reqres.in/api/users" )
    .then(response => { 
    return response.json() //Para transformar em Json
})
    .then(data => { // retorna a resposta traduzida pelo Json
        for (let i = 0; i < data.data.length; i++){
        const authors = document.querySelector (".authors");
        const card = document.createElement ("div");
        card.setAttribute("class","card");

        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const botao = document.createElement ("button")
        botao.setAttribute("data-id", "i") //Valores personalizados para um elemento HTML - id é um atributo personalizável - vamos pegar esse atributo para deletar um card.


        h2.innerHTML = data.data[i].first_name + "" + data.data[i].last_name
        p.innerHTML = data.data[i].email;
        botao.innerHTML = "X"

        authors.appendChild(card);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(botao)

        botao.addEventListener("click",() =>{
            const thisCard = botao.parentElement;
            const cardPai = thisCard.parentElement;

//Com um só parametro ele faz um GET, para fazer outra coisa preciso passar um método.
            fetch ( "https://reqres.in/api/users", {
                method: "DELETE",
                headers:{
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ //Não posso passar string de HTML puro para criar um objeto, preciso traduzir para JSON.
                    "id": botao.getAttribute("data-id"),
                })
            })
            .then(() =>{
                cardPai.removeChild(thisCard)
            })
            .catch((erro) =>{
                console.log(erro)
            })
        })
    }
})
.catch(erro => { //Mostra uma mensagem caso dê erro na API
    console.log(erro);
})