var valores = [5, 10, 20, 25, 30, 35, 40, 45, 50, 55]

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

function buscaBin(num) {
    let inicio, fim;
    let meio;
    inicio = 0;
    fim = 9;
    while (inicio < fim) {
        meio = parseInt((inicio + fim) / 2);
        if (num == valores[meio]) {
            return meio;
        } else {
            if (num > valores[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    return -1;
}

console.log(buscaBin(35));