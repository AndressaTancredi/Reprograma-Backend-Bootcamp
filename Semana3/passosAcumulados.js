// Dará 3 voltas e a cada volta informará o número de passos acumulados
let volta = 1;
let passos = 0;

while (volta<=3){
    passos = passos + parseInt(prompt("Informe o número de passos"))
    volta++
}
console.log("Você deu " + passos + " passos.")

