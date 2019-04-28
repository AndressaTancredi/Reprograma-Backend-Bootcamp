/* Criar uma urna eletrônica para receber o voto de sua heroína favorita.
Se for 0 = nulo
Se for 10 = Mulher Maravilha
Se for 20 = Capitã Marvel
Se não digitar nada = Ada  */

let voto = prompt("Digite o seu voto")

switch(voto) {
    case "0":
    console.log("Você votou nulo");
    break;
    case "10":
    console.log ("Voce votou na Mulher Maravilha");
    break;
    case "20":
    console.log("Voce votou na Capitã Marvel");
    break;
    default: console.log("Você votou na Ada")
}

/* Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão (usando a comparação de igualdade estrita, ===) transferindo assim o controle para a cláusula encontrada e em seguida execudando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opicional default, que, se encontrado, tem o controle transferido à ele, executando suas instruções associadas. Se não ouver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula default é a última, mas não é algo obrigatório.

A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada  e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch.  */