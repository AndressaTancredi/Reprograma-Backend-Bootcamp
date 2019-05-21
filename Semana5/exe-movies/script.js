//http://www.omdbapi.com/?s=TEXTO&apikey=CHAVE

const botao = document.querySelector(".btn-search-movie");

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    const texto = document.getElementById("movie").value; //Será o input do usuário
    const movies = document.querySelector(".movies")

    fetch("http://www.omdbapi.com/?s="+texto+"&apikey=d079d9ff")

.then((response) => { 
    return response.json();
})
.then((data) =>{
    console.log(data);
    movies.innerHTML="";
    console.log("Deu certo!");
    data.Search.forEach(movie => { //ForEach funciona só com array, maps e sets
        const imagem = document.createElement("img");
        imagem.setAttribute("src", movie.Poster);

        const box = document.createElement("div");
        box.setAttribute("data-id", movie.imdbID);
        box.setAttribute("class","box");
        box.appendChild(imagem);     

        movies.appendChild(box);

        var titulo = 
        // Template String
        `<p>
            <span> ${movie.Title} </span>
            <span> ${movie.Year} </span>
            </p>`

        const boxDiv = document.createElement("div");
        boxDiv.setAttribute("class", "box-divider");
        boxDiv.innerHTML= titulo;
        box.appendChild(boxDiv);

        var tipo = document.createElement("p");
        tipo.innerHTML= movie.Type;
        boxDiv.appendChild(tipo);
    });
})  
.catch((erro) => {
    console.log(erro);
})
})