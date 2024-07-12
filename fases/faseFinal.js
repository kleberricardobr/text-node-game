const { nivelFacil } = require("../niveis");
const Inimigo = require("../personagens/inimigo");
const { println, limparConsole, pause, gerarNumeroRandomico } = require("../utils/utils")

module.exports = (nivel, heroi) => {
    limparConsole();
    if (nivel == nivelFacil) {
        println(`Após a luta contra o gato Plutão, ${heroi.nome} toda arranhado, suspira aliviado!`);
    } else {
        println(`Após a luta contra os gatos irmãos, ${heroi.nome} toda arranhado, suspira aliviado!`);
    }

    println(`${heroi.nome} já está cansado e resolve voltar...`);
    println(`O caminho de volta não parece mais o mesmo.`);
    println(`Andando por horas e já em desespero, avista a luz do sol.`);
    println(`Quase chegando na saída, uma criatura aparece.`);
    println(`A criatura comunicava-se por meio de pensamentos: nunca volte, sou o Fred Segemundus, o senhor dos medos.`);
    println(`Prepare-se para o ataque...`);
    println(`Fred possui um charuto gigante que expele fogo e angústias sobre ${heroi.nome}...`);    
    pause();
    limparConsole();
    
    //Gera novo inimigo
    const fred = gerarInimigo(heroi, "Fred Segemundus", nivel); 
    //Executa a batalha com base no inimigo gerado
    executarBatalha(heroi, fred, batalhaFred);  
    if(nivel == nivelFacil || !heroi.estaVivo())
        return heroi.estaVivo();

    pause()
    limparConsole();
    println(`Uma nova criatura se aproxima:`);
    println(`Olá, sou Rivus de Trills, venho de um mundo de reações.`);
    println(`Para me vencer deverá suportar meus efeitos.`);
    println(`E uma nova batalha se inicia...`);
    pause();
    limparConsole();

    //Gera novo inimigo
    const rivus = gerarInimigo(heroi, "Rivus de Trills", nivel);
    //Executa batalha
    executarBatalha(heroi, rivus, batalhaRivus);
       
    return heroi.estaVivo();   
}

const gerarInimigo = (heroi, nomeInimigo, nivel) => {
    //Instancia um novo inimigo e exibe os dados de vida do herói e inimigo
    const inimigo = Inimigo.getNewInimigo(nomeInimigo, nivel);
    println(`Vida ${heroi.nome} x ${inimigo.nome}`);
    heroi.exibirVida();
    inimigo.exibirVida();
    pause();
    return inimigo;
}


const batalhaFred = (heroi, fred) => {
    let qtBatalha = 1;
    while(fred.estaVivo() && heroi.estaVivo()) {
        //Batalha baseada em um valor randomico entre 1 e 10
        //Se cair >= 5 o inimigo ataca, senão quem ataca é o herói
        if(gerarNumeroRandomico(10, 1) >= 5) {
            println(`Fred ataca!!!`);
            fred.atacar(heroi)
        } else {
            println(`${heroi.nome} ataca confrotando as afirmações de Fred!!!`);
            heroi.atacar(fred);
        }

        println(`Batalha ${qtBatalha} executada!`);
        pause();
        limparConsole();
        qtBatalha++;
    }
}

const maximoBatalhaRivus = 50;

const batalhaRivus = (heroi, rivus) => {
    let qtBatalha = 1;    
    while(rivus.estaVivo() && rivus.estaVivo()) {
        
        //Evita um loop infinito caso herói seja indestrutível
        //E somente Rivus esteja atacando
        if (qtBatalha > maximoBatalhaRivus && heroi.indestrutivel) {            
            qtBatalha = 1;
            println("Números de batalhas reiniciando...");
        }   

        //Se herói não vencer até a batalha número (maximoBatalhaRivus - 1)
        //Depois disso somente Rivus atacará, ficando impossível sair vivo (a não ser que seja indestrutível)
        if(gerarNumeroRandomico(maximoBatalhaRivus, 1) <= qtBatalha) {
            println(`Rivus ataca com efeitos entorpecentes!!!`);
            rivus.atacar(heroi)
        } else {
            println(`${heroi.nome} ataca com a força dos exercícios físicos praticados!!!`);
            heroi.atacar(rivus);
        }

        println(`Batalha ${qtBatalha} executada!`);
        pause();
        limparConsole();
        qtBatalha++;
    }
}

//Função genérica para receber o heroi, inimigo e executar
//uma função de callback responsável pela batalha
const executarBatalha = (heroi, inimigo, batalha) => {    
    batalha(heroi, inimigo);    
    heroi.mensagemAposBatalha(inimigo);
}