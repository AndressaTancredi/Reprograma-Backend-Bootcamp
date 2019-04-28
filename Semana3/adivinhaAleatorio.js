// Adivinha o número
// Math.random gera um número aleatório entre 0 e 1 não inteiro, para vir um número inteiro uso: Math.round(Math.random()*10)

// Gera um número aleatório entre 0 e 10
var numeroOculto = Math.round(Math.random()*10)
var acertou = false;
var chute
console.log(numeroOculto);

while (acertou == false){
    chute = parseInt(prompt('Tente adivinhar o número'))
    if (chute == numeroOculto){
        acertou = true
        alert('Parabéns, você acertou!')
    } 
}

// Contar de 0 até 10

var numero = 0

while (numero<=10){
    console.log(numero)
    numero++ //incrementar
}

// Contar de 10 até 0 

var numero = 10

while (numero>=0){
    console.log(numero)
    numero-- //decrementar
}
