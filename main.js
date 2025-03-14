const promt= require ("prompt-sync")();

var i, j, lin, col;
var jogadas=0;
var jogador ='o';
var vencedor ='';
var fimjogo = false;
var tab = [3];
//a

while ((jogadas < 9) && (fimjogo==false)){
    //b
    lin=parseInt(promt(`${jogador} em [linha]: `))
    col=parseInt(promt(`${jogador} em [coluna]: `));

    //c
}
 //d
 if(vencedor==' '){
    console.log("empate\n");
 }else{
    console.log(`${vencedor} venceu`);
    
 }