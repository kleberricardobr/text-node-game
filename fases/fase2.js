const { nivelFacil, nivelDificil } = require("../niveis");
const { limparConsole, println, pause, gerarNumeroRandomico, perguntarLoopSimNao } = require("../utils/utils")

module.exports = (nivel, heroi) => {
    limparConsole();
    println(`Após o ataque da besta maldita, ${heroi.nome} prossegue adentrando-se pela caverna.`);
    println(`No meio do caminho tinha uma pedra...`);
    println(`Estranho! Ela está se movendo!`);
    println(`Parece um rato gigante...Não! É um coelho!`);
    println(`O herói correndo para alcançar o coelho, acaba caindo em um buraco...`);
    pause();  
    
    const sobreViveu = cairNoBuraco(nivel, heroi);        
    
    if (sobreViveu || heroi.indestrutivel) {
        pause();
        limparConsole();
        comprarVida(heroi);              

        return comprarForca(nivel, heroi);                
    }       

    return false;
}


const cairNoBuraco = (nivel, heroi) => {
    limparConsole();
    //Se o nível for fácil, o herói sobreviverá da queda
    //apenas se o valor gerado randomicamente for maior ou igual a 2.
    //Como o valor sorteado poderá estar entre 1 e 10, as chances são grande nesse caso.
    //Porém, se o nível for difícil, o heróis somente sobreviverá se o valor for
    //maior ou igual a 7 
    const menorValor = nivel === nivelFacil ? 2 : 7;    
    const sobreviveu = gerarNumeroRandomico(10, 1) >= menorValor;    
    if (!sobreviveu) {
        println(`Haviam lanças gigantes no final. Pobre ${heroi.nome}!`);
        return false;
    }
    
    //Se sobreviveu a queda, no modo fácil não perderá vida
    if (nivel === nivelFacil) {
        println(`O buraco era fundo, porém no final havia um lago que amorteceu a queda.`);
        return true;
    }        

    //No modo difícil, o herói perderá vida após a queda
    println(`${heroi.nome} cai bruscamente sobre uma pedra! O coelho sorri: acontece...`);
    heroi.defender(20);
    //Caso tenhha pouca vida, o herói morre
    return heroi.estaVivo();    
}

const comprarVida = (heroi) => {
    const comprar = perguntarLoopSimNao(`Tudo tem um preço nesse mundo, inclusive sua vida (C$ 50,00),`+
                                         ` disse o Coelho. Deseja adquirir mais 100 vidas? (S - Sim; N - Não)`);    
    
    if(comprar) {                                                   
        heroi.comprarVida(100, 50);    
        heroi.exibirDados(); 
    }                                            
    pause();                                        
}

const comprarForca = (nivel, heroi) => {
    limparConsole();
    println(`Enquanto houver vida, haverá esperança. \n`+
            `Disse o coelho Hawking. \n`+
            `Mas para prosseguir é preciso força e coragem. \n`+
            `Não vendo coragem, mais ao preço de C$75,00 posso te dar força (1000PW) \n`);
    const compraForca = perguntarLoopSimNao("Deseja ganhar mais força? (S - Sim; N - Não)");

    //Se não quiser compra ou não tiver saldo
    if (!compraForca || !heroi.podeComprar(75))            
        return true;
    
    //Se for nível difícil o coelho poderá trapacear
    if(nivel === nivelDificil) {
        println("O coelho Hawking recolhe suas orelhas...");
        const coelhoTrapaca = gerarNumeroRandomico(2, 1) === 2;
        if (coelhoTrapaca) {
            println("A orelha de Hawking de repente começa a expelir radiação. \n "+
                    "Oh Deus! É o horizonte de eventos de um buraco negro.");
            pause();
            return false;        
        }
    }

    heroi.comprarForca(1000, 75);       
    
    return true;
}