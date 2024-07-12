const { nivelFacil, vidaNivelFacil, forcaInicialFacil, nivelDificil } = require("../niveis");
const Heroi = require("../personagens/heroi");
const Inimigo = require("../personagens/inimigo");
const { limparConsole, println, pause } = require("../utils/utils")

module.exports = (nivel, heroi) => {
    limparConsole();
    println("Hawking, o Coelho, desejou boa sorte e encolheu-se até  desaparecer...");
    println(`${heroi.nome} adentra-se pela caverna, agora questionando se deveria realmente ter entrado.`);
    println(`De súbito avista um gato preto. Uma leve impressão de já ter visto aquela cena recorre em sua mente.`);   
    println(`Déjà-vu, diz o ${heroi.nome}.`);
    println(`Não, eu sou o Allan, responde o gato com um sorriso amarelo.`);
    println(`De repente outro gato aparece. É Plutão, o irmão de Allan.`);

    if(nivel == nivelDificil) {
        println(`Plutão vira um corvo e juntamente com Allan iniciam um ataque contra ${heroi.nome}`);
        pause();
        limparConsole();
        return batalhaDefault(heroi, batalhaDificil);
    }        
    
    println(`Plutão vira um corvo e inicia um ataque. ${heroi.nome} e Allan juntam-se na batalha contra Plutão`);
    pause();
    limparConsole();
    return batalhaDefault(heroi, batalhaFacil);   
}

const batalhaFacil = (heroi) => {
    const plutao = Inimigo.getNewInimigo("Plutão", nivelFacil);
    const allan = new Heroi("Allan", vidaNivelFacil, forcaInicialFacil, false, false);

    let nrBatalha = 1;
    //Se herói morre ou plutacao morrer a batalha termina
    while(heroi.estaVivo() && plutao.estaVivo()) {
        if (allan.estaVivo) {
            println(`Allan disfere um golpe contra Plutão!`);
            allan.atacar(plutao);
        }

        if(plutao.estaVivo()) {
            println(`${heroi.nome} disfere um golpe contra Plutão!`);
            heroi.atacar(plutao);
        }

        if(plutao.estaVivo()) {
            println(`Plutão ataca ${heroi.nome}!`);        
            plutao.atacar(heroi);

            println(`Plutão ataca Allan!`);
            plutao.atacar(allan);
        }

        if (!allan.estaVivo)
            println("Allan morreu :(");   
        
        println(`Batalha ${nrBatalha} finalizada!`);
        nrBatalha++;
        pause();
    }
    
    if(heroi.estaVivo())
        println(`WOWWWW!! Com a ajuda de Allan, Plutão foi derrotado!!!`);
}

const batalhaDificil = (heroi) => {
    const plutao = Inimigo.getNewInimigo("Plutão", nivelDificil);
    const allan = Inimigo.getNewInimigo("Allan", nivelDificil);

    let nrBatalha = 1;
    //Se herói morrer ou todos os inimigos morrerem a batalha termina
    while(heroi.estaVivo() && (plutao.estaVivo() || allan.estaVivo())) {
        if(plutao.estaVivo()) {
            println(`Plutão ataca ${heroi.nome}`);
            plutao.atacar(heroi);
            println(`${heroi.nome} ataca Plutão`);
            heroi.atacar(plutao);
        } else {
            println(`Plutão se foi!`);
        }  

        if(allan.estaVivo()) {
            println(`Allan ataca ${heroi.nome}`);
            allan.atacar(heroi);
            println(`${heroi.nome} ataca Allan`);
            heroi.atacar(allan);            
        } else {
            println(`Allan se foi!`);
        }   

        println(`Batalha ${nrBatalha} finalizada!`);
        nrBatalha++;
        pause();
    }

    heroi.mensagemAposBatalha(allan);
    if (heroi.estaVivo())
      heroi.mensagemAposBatalha(plutao);
}

const batalhaDefault = (heroi, batalha ) => {
    batalha(heroi);    
    return heroi.estaVivo();
}