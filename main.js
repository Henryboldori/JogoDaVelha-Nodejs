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

while ((jogadas < 9) && (fimjogo == false)) {
    // (b) Exibir o tabuleiro formatado
    console.log("Tabuleiro Atual:");
    for (i = 0; i < 3; i++) {
        console.log(`[ ${tab[i][0]} ] [ ${tab[i][1]} ] [ ${tab[i][2]} ]`); // Exibir linha formatada
    }

    // (c)
    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));
}

// (d)
if (vencedor == '') {
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}
