// function

function soma(operadorA, operadorB) {
    resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Ola Gama! vocé é o ' + nome);
}

var resultadoDaSoma = soma(1, 2);
var resultadoNovaSoma = soma(10, 66);

console.log(resultadoDaSoma);
console.log(resultadoNovaSoma);

olaGama('RM');
