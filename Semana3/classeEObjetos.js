class Canetao{
	constructor(_marca, _cor){
		this.marca = _marca,
		this.cor =_cor,
		this.tampada =true,
		this.escrevendo = false
    }
    escrever(){ //function
        if (this.tampada == false){
            console.log('Estou escrevendo')
            this.escrevendo = true
    }else{
    console.log('Erro:Você deve destampar antes de escrever')
    }
    }

/* Criei a forma (O projeto do objeto - a classe) agora vamos usar esse template que criamos para criar objetos.
A classe é uma massa geral e o objeto criado a partir dessa classe é uma forminha de biscoito.
Para criar um novo objeto a partir dessa classe:
let canetao2 = new Canetao("Pilot","azul")
Isso significa INSTANCIAR */

// Para acrescentar algo na classe usa o prototype mas o mais indicado é mudar direto na classe, no constructor.
// Canetao.prototype.carregavel = true

// Pode mudar a propriedade do objeto: para saber a marca do canetão:

get marca(){
    return this.marca
}


/* Para mudar uma propriedade de um objeto, primeiro cria o novo objeto:
let canetao2 = new Canetao("Pilot","Azul")
Depois muda o que eu quero:
canetao2.tampada = false */

// Código da prof:

/* class Canetao{
	constructor(_marca, _cor){
		this.marca = _marca,
		this.cor =_cor,
		this.tampada =true,
		this.escrevendo = false
    }
    escrever(){ //function
        if (this.tampada == false){
            console.log('Estou escrevendo')
            this.escrevendo = true;
        }else{
        console.log('Erro:Você deve destampar antes de escrever')
        }
    } */

/*     destampar(){
        this.tampada?this.tampada = false:console.log('O canetao já está sem tampa!')
    }

    tampar(){
        if (this.tampada){
            console.log('O canetao já está com tampa!')
        }else {
            this.tampada = true
            if(this.escrevendo) {
                this.escrevendo = false;
            }
        }
    }
}

let canetao1 = new Canetao('Pilot','Azul')
console.log(canetao1)

canetao1.escrever()
console.log(canetao1)
canetao1.destampar()
console.log(canetao1)
canetao1.escrever()
console.log(canetao1)
canetao1.tampar()
console.log(canetao1) */
