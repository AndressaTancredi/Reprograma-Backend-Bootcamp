let alunos = document.querySelectorAll(".aluno"); // Retorna o array com todos os alunos

//Usando o FOR para pegar os dados de CADA aluno
for(var i=0; i<alunos.length; i++){

    // console.log(alunos[i]); Pegar CADA aluno
    var aluno = alunos[i];
    
    var tdNota1 = aluno.querySelector(".info-notaum");
    var nota1 = tdNota1.textContent;

    var tdNota2 = aluno.querySelector(".info-notadois");
    var nota2 = tdNota2.textContent;

    var tdMedia = aluno.querySelector(".info-media");
    var media = calculaMedia(nota1,nota2);
    tdMedia.textContent = media.toFixed(2);
}
function calculaMedia(nota1,nota2){
    media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    return media.toFixed(2);
}

