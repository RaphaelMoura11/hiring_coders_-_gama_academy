console.log("teste1")

function validaCPF(cpf) {
    if (cpf.lenght != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9)
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numero = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--){
            soma += numero.charAt(11 - k) * k;
        }

        resultados = soma % 11 > 2 ? 0 : 11 - (soma % 11);

        //validação segundo digito
        if (resultados != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacao() {
    console.log("teste2");
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

