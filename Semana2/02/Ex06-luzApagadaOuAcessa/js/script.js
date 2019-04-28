// Puxando elementos do DOM
let botao = document.querySelector('.btn');
let lampadaStatus = document.querySelector('.status');

// console.log(botao.classList) //Mostrar lista de classes do elemento
// console.log(lampadaStatus.classList)

// Lógica:
// Pegar a lista de classe
// Verificar se a lista de classe possui a classe apagada
// Se tiver a classe apagada
// Remover a classe apagada (display none)
// Adiciono a classe acesa (display block)


// Modo 1:
botao.addEventListener('click',function(){
    
    if (lampadaStatus.classList.contains('apagada')){
        lampadaStatus.classList.remove('apagada')
        lampadaStatus.classList.add('acesa')
        botao.textContent = 'Apagar'
    }else{
        lampadaStatus.classList.remove('acesa')
        lampadaStatus.classList.add('apagada')
        botao.textContent = 'Acender'
    }
})

// // Modo 2:
// botao.addEventListener('click',function(){
    
//     if (lampadaStatus.classList.contains('apagada')){
//         lampadaStatus.classList.replace('apagada','acesa')
//         botao.textContent = 'Apagar'
//     }else{
//         lampadaStatus.classList.replace('acesa','apagada')
//         botao.textContent = 'Acender'
//     }
// })