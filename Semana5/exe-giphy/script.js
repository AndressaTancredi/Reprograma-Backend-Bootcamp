const botao = document.querySelector(".btn-search-sticker");

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    const texto = document.getElementById("sticker").value; //Será o input do usuário
    const stickers = document.querySelector(".stickers");

    fetch("https://api.giphy.com/v1/stickers/search?q="+texto+"&api_key=ZUPqvdp9UHlFXilm5lZ4s30THtQi74hC")

.then((response) => { 
    return response.json();
})
.then((data) =>{
    console.log(data);
    stickers.innerHTML="";
    console.log("Deu certo!");
    data.data.forEach(gifs => {
        const box = document.createElement("div");
        box.setAttribute("data-id", "i");
        stickers.appendChild(box);
        const imagem = document.createElement("img");
        imagem.setAttribute("src", gifs.images.fixed_width.url);
        box.appendChild(imagem);
        //imagem.src = gifs.images.fixed_width.url; //Peguei o link no Postman na parte da imagem do Json
    });
})
.catch((erro) => {
    console.log(erro);
}) 
})