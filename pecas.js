
let peso = 120;


if(peso >= 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!");
}
else {
    console.log("A peça não pode ser cadastrada, pois não possui peso mínimo");
}

let listaPecas = ["Disco de Freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "radiador", "carburador"]

if (listaPecas.length < 10 ) {
    console.log ("A lista ainda possui espaço para cadastro");
}
else {
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida")
}

let nomePeca = "Embreagem"

if (nomePeca.length > 3) {
    console.log("Nome de peça é válido, continue o cadastro");
 } else[
     console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres")
 ]
 