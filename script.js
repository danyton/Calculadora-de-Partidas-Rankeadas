let patente = '';
let vitorias = 0;
let derrotas = 0;
let saldo = 0;
let titulo = '';

function retornaSaldoDePartidasRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function mostraResultadoDasPartidas(checaTitulo = true) {
    vitorias = parseInt(document.querySelector('#victories').value.trim()); // Convertendo para número
    derrotas = parseInt(document.querySelector('#defeats').value.trim()); // Convertendo para número
    saldo = retornaSaldoDePartidasRankeadas(vitorias, derrotas);
    titulo = document.querySelector('.content__title');

    if (vitorias <= 10) {
        patente = 'Ferro';
    } else if (vitorias > 10 && vitorias < 21) {
        patente = 'Bronze';
    } else if (vitorias >= 21 && vitorias < 51) {
        patente = 'Prata';
    } else if (vitorias >= 51 && vitorias < 81) {
        patente = 'Ouro';
    } else if (vitorias >= 81 && vitorias < 91) {
        patente = 'Diamante';
    } else if (vitorias >= 91 && vitorias < 101) {
        patente = 'Lendário';
    } else if (vitorias >= 101) {
        patente = 'Imortal';
    }

    titulo.innerHTML = checaTitulo ? `
        Saldo de ${saldo} Sua patente<br> e ${patente}
    ` : 'Saldo de partidas Rankeadas';
}

function resetResultados() {
    document.querySelector('#victories').value = ''; // Limpar o valor do input de vitórias
    document.querySelector('#defeats').value = ''; // Limpar o valor do input de derrotas
    mostraResultadoDasPartidas(false);
}
