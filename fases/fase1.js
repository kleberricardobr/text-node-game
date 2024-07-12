
const { nivelFacil } = require("../niveis");
const Inimigo = require("../personagens/inimigo");
const { limparConsole, println, pause, pularLinha } = require("../utils/utils")

module.exports = (nivel, heroi) => {
    limparConsole();
    println(`Sábado de manhã, nada melhor do que dar um passeio pelo mato para esquecer a vida cotidiana!`);
    println(`${heroi.nome} prepara sua mochila e segue em direção à floresta.`);
    println(`Caminhando em meio a mata, ${heroi.nome} encontra uma caverna...`);
    println(`Sua curiosidade o leva a explorá-la`);
    println(`Após adentrar-se, dois pontos vermelhos começam a brilhar na escuridão...`);
    println(`Uma criatura com duas cabeças de leão e corpo de elefante inicia um ataque feroz!`);  
    pause();

    const vilao = Inimigo.getNewInimigo("Besta Estranha", nivel);

    pularLinha();
    println(`Valores de Vida ${heroi.nome} X ${vilao.nome} antes do combate:`);
    heroi.exibirVida();
    vilao.exibirVida();

    let numeroAtaque = 1;
    while(vilao.estaVivo() && heroi.estaVivo()) {
        println(`Ataque: ${numeroAtaque}`);

        println(`O monstro ${vilao.nome} ataca!!!`);
        vilao.atacar(heroi);

        println(`${heroi.nome} ataca!!!`);
        heroi.atacar(vilao);      
        
        numeroAtaque++;
        pularLinha();                
    }

    heroi.mensagemAposBatalha(vilao);      
    if (heroi.estaVivo() && nivel == nivelFacil) {
        heroi.ganharMoeda(50);
        heroi.ganharVida(100);
        println(`Parabéns!! ${heroi.nome} ganhou C$50,00 de moedas e 100PW de Vida!!`);        
    }
    return heroi.estaVivo();      
}