const { println, limparConsole, pularLinha } = require("../utils/utils")

module.exports = (heroi) => {
    limparConsole();
    println(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    println(`Parabéns por ter chegado até aqui!!!!`);
    pularLinha();
    println(`Dooooommmmmmm.... Ventos fortes batiam lá fora!`);
    println(`O menino Romero acordou assustado. Nossa foi só um sonho!`);
    println(`Ainda bem que ${heroi.nome} conseguiu sair daquela caverna, disse Romero.`);
    println(`Vou aprender a programar, pensou!`);
    println(`Quem sabe um dia não faça um jogo com monstros...`);
    pularLinha();
    println(">>>>>>>>>>>>>>>>>>>>FIM<<<<<<<<<<<<<<<<<<<<<");
    return true;
}