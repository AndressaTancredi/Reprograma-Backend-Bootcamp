// // Ordene o array do menor para o maior sem sort.

// let array = [5,37,18,59,12,-5];

// for (let i=0; i<array.length; i++){
//     for (let j=i+1; j<array.length; j++){
//         if (array[j]<array[i]){
//             let aux = array[i];
//             array[i] = array [j]
//             array[j] = aux;
//         }
//     }
// }
// console.log(array)

// Ou posso fazer assim:
let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let  cont = 0;
let contador = 0;

console.log(array);

while(cont < array.length){

    for(let i=0; i<array.length; i++) {
        let posAtual= array[i];
        let proximaPosicao = array[i+1];
        contador ++;
        if(posAtual > proximaPosicao) {
            array[i] = proximaPosicao;
            array[i+1] = posAtual;
        }
    }
cont ++;
}
console.log(array);
console.log(contador);
