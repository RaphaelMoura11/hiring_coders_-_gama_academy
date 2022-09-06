// while
var achou = false;
var numeroSorteado = 10
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log('possivel valor não correspondente ao numero sorteado');
    }
}

