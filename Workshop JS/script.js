const cartas = document.querySelectorAll('.carta')

function embaralhar(){
    cartas.forEach(carta => {
        let numeroAleatorio = Math.floor(Math.random()*12);
        carta.style.order = numeroAleatorio
    })
}

embaralhar();


cartas.forEach(carta=>{carta.addEventListener('click',virarCarta)})

let pontos = 0
let primeiraCarta = null
let segundaCarta = null

function virarCarta(){
    if (primeiraCarta && segundaCarta){
        return
    } else{
        this.classList.add('flip')
    }

    if (primeiraCarta === null){
        primeiraCarta = this
        console.log('1aCarta',primeiraCarta)
    } else{
        if (segundaCarta!= null){
            return
        }

        if (this === primeiraCarta){
            return
        }else{
        segundaCarta = this
        console.log('2aCarta',segundaCarta)
        if(segundaCarta.dataset.framework === primeiraCarta.dataset.framework){
            pontos++
            primeiraCarta = null
            segundaCarta = null
            return
        }  else{
            setTimeout(()=>{
                primeiraCarta.classList.remove('flip')
                segundaCarta.classList.remove('flip')
                primeiraCarta = null
                segundaCarta = null
            },1500)
        }  
        }
    }
}



