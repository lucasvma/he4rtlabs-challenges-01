function calcularFreelas() {
    let valorProjeto = document.getElementById('total-projeto').value,
        horasDiarias = document.getElementById('qtd-horas-trabalhadas-dia').value,
        diasEfetivos = document.getElementById('qtd-dias-trabalhados').value,
        diasFerias = document.getElementById('dias-ferias-projeto').value;

    let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + (diasFerias * diasEfetivos * horasDiarias);

    if (valorHora > 0) {
        document.getElementsByClassName("resultado-calculado")[0].removeAttribute('hide');
        document.getElementById("valor-hora").innerHTML = '<h3>Valor por hora </br>R$ ' +
            dolarParaReal(valorHora) + '</h3>';
    } else {
        alert("Favor Insira as informações corretamente!");
    }
}

function dolarParaReal(valor) {
    return valor.toLocaleString('pt-br');
}

function mostrarExplicacao(nome) {
    var explicacao = "";

    switch (nome) {
        case 'help-total-projeto':
            explicacao = 'O total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar ' +
                'em cima do trabalho, é feito o calculo maior.';
            break;
        case 'help-qtd-horas-trabalhadas-dia':
            explicacao = 'Sobre o tempo diário investido. Quando tratamos de freelances, há uma certa demanda do seu ' +
                'tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você ' +
                'usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então ' +
                'claramente temos que levar esse fator em consideração.';
            break;
        case 'help-qtd-dias-trabalhados':
            explicacao = 'A quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há ' +
                'nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar ' +
                'tudo com o cliente. Logo, você terá que cotar uma quantidade de dias especificos para lidar com todo ' +
                'o processo, sendo ele a parte comercial e desenvolvimento.';
            break;
        case 'help-dias-ferias-projeto':
            explicacao = 'Qualquer modalidade de trabalho, seja CLT ou PJ há seus encargos referentes a verba de ' +
                'férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete ' +
                'diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.';
            break;
    }

    alert(explicacao);
}