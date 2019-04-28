//Faça um algoritimo que apareça o array [5,37,18,59,12,-5] e mostre o maior e o menor número.

let array = [5,37,18,59,12,-5];
let maior = -Infinity;
let menor = Infinity;

console.log(array)
for (let i=0; i<array.length; i++){
    if(array[i]>maior){
        maior = array[i]
    }

    if(array[i]<menor){
        menor = array[i]
    }
}
console.log("O maior número é o "+ maior +" e o menor " + menor )

/* Ou posso usar o sort e ordenar o array:

let array = [5,37,18,59,12,-5];

console.log(array)
let arrayOrdenado = array.sort()
console.log("O menor número é: " + arrayOrdenado[0])
console.log("O maior número é: " + arrayOrdenado[arrayOrdenado.length-1]) */