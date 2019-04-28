/* Crie um algoritimo que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado. Nota maior ou igual a 6 aprovado, 5 recuperação e <5 reprovado*/
function mediaAluno (nota1,nota2){
    let media = (nota1+nota2) / 2
    if (media>=6){
        console.log("Com essa nota: " + media + ". Você está aprovado(a)!")
} else if (media = 5){
    console.log("Com essa nota: " + media + ". Você está de Recuperação!")
} else{
    console.log("Com essa nota: " + media + ". Você está Reprovado(a)!")
}
}
mediaAluno(2,48)
