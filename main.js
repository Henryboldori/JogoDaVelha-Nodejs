const prompt = require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = '';
var fimjogo = false;
var tab = [];

// (a) Inicialização da matriz 3x3
for (i = 0; i < 3; i++) {
    tab[i] = []; // Criando a linha com 3 elementos
    for (j = 0; j < 3; j++) {
        tab[i][j] = ' '; // Preenchendo cada posição com espaço vazio
    }
}

// Função para verificar se há um vencedor
function verificarVencedor() {
    for (i = 0; i < 3; i++) {
        // Verificar linhas
        if (tab[i][0] == jogador && tab[i][1] == jogador && tab[i][2] == jogador) {
            return true;
        }
        // Verificar colunas
        if (tab[0][i] == jogador && tab[1][i] == jogador && tab[2][i] == jogador) {
            return true;
        }
    }
    // Verificar diagonais
    if (tab[0][0] == jogador && tab[1][1] == jogador && tab[2][2] == jogador) {
        return true;
    }
    if (tab[0][2] == jogador && tab[1][1] == jogador && tab[2][0] == jogador) {
        return true;
    }
    return false;
}

while ((jogadas < 9) && (fimjogo == false)) {
    // (b) Exibir o tabuleiro formatado
    console.log("Tabuleiro Atual:");
    for (i = 0; i < 3; i++) {
        console.log(`[ ${tab[i][0]} ] [ ${tab[i][1]} ] [ ${tab[i][2]} ]`); // Exibir linha formatada
    }

    // (c) Solicitar jogada e validar entrada
    do {
        lin = parseInt(prompt(`${jogador} em [linha] (0-2): `));
        col = parseInt(prompt(`${jogador} em [coluna] (0-2): `));

        if (lin < 0 || lin > 2 || col < 0 || col > 2) {
            console.log("Posição inválida! Escolha um número entre 0 e 2.");
        } else if (tab[lin][col] !== ' ') {
            console.log("Posição já ocupada! Escolha outra.");
        } else {
            break;
        }
    } while (true);

    // Atualizar tabuleiro com o símbolo do jogador
    tab[lin][col] = jogador;
    jogadas++;

    // Verificar se o jogador venceu
    if (verificarVencedor()) {
        vencedor = jogador;
        fimjogo = true;
        break;
    }

    // Alternar jogador
    jogador = (jogador === 'o') ? 'x' : 'o';
}

// (d) Exibir resultado final com laço for
console.log("\nTabuleiro Final:");
for (i = 0; i < 3; i++) {
    console.log(`[ ${tab[i][0]} ] [ ${tab[i][1]} ] [ ${tab[i][2]} ]`); // Exibir linha formatada
}

// Mostrar vencedor ou empate
if (vencedor !== '') {
    console.log(`\n${vencedor} venceu!`);
} else {
    console.log("\nEmpate!");
}
