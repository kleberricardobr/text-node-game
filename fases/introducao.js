const { nivelFacil, vidaNivelFacil, vidaNivelDificil, forcaInicialFacil, forcaInicialDificil } = require("../niveis");
const Heroi = require("../personagens/heroi");
const { perguntarLoop, println, limparConsole, perguntarLoopSimNao, pularLinha, pause } = require("../utils/utils");

const forcaPorTreinoNivelFacil = 100;
const forcaPorTreinoNivelDificil = 75; 
const qtdMaximaTreinoFacil = 40;
const qtdMaximaTreinoDificil = 30;

const pagamentoTrabalhoFacil = 50;
const pagamentoTrabalhoDificil = 10; 
const qtdMaximaTrabalhoFacil = 25;
const qtdMaximaTrabalhoDificil = 15;

const codigoSecreto = "ITalents";

module.exports = (nivel) => {    
    println("Vamos primeiro definir as capacidades de nosso personagem...")   
    const nome = perguntarLoop("Informe um nome para ele: ");
    const segredoAtivado = nome == codigoSecreto;        

    //Se for nível fácil, o herói terá super poderes para um golpe mais letal
    const temSuperPoderes = nivel === nivelFacil;
    //Se for nível fácil o herói terá mais vida
    const vida = nivel === nivelFacil ? vidaNivelFacil : vidaNivelDificil;    
    //For for nível fácil o herói terá mais força
    const forca = nivel === nivelFacil ? forcaInicialFacil : forcaInicialDificil;
    //Constrói o herói
    const heroi = new Heroi(nome, vida, forca, temSuperPoderes, segredoAtivado);    

    //Heroi treina um pouco para ganha força
    treinar(heroi, nivel);
    //Trabalha um pouco para ganhar moedas
    trabalhar(heroi, nivel);

    if (segredoAtivado) {
        heroi.forca *= 100000;        
        heroi.vida *=  100000;
        heroi.ganharMoeda(500000);
    }

    pularLinha();
    println(`Excelente! ${heroi.nome} está mais animado e saudável do que nunca!`);
    //Exibe os atributos do personagem
    heroi.exibirDados();
    pularLinha();

    println(`Chegou o final de semana. E ${heroi.nome} resolveu aventurar-se por uma floresta!`);    
    pause();
    limparConsole();
    
    return heroi;    
}

const treinar = (heroi, nivel) => {
    limparConsole();

    //Se for modo fácil, a cada treino será adiquirido 
    //um valor de força maior do que se for no modo difícil.
    //Consequentemente no modo fácil as chances de ficar mais forte serão maiores
    const nivelForcaTreino = nivel === nivelFacil ? forcaPorTreinoNivelFacil : forcaPorTreinoNivelDificil;    


    //Se for modo fácil o limite máximo de quantidade de treino será maior
    //do que se for no modo difícil.
    //Consequentemente no modo fácil as chances de ficar mais forte serão maiores
    const limiteTreino = nivel === nivelFacil ? qtdMaximaTreinoFacil : qtdMaximaTreinoDificil;

    //Executa o treino até o usuário informar que não quer mais ou atingir o limite máximo permitido
    let qtdTreino = 1;
    println(`Perfeito. Recomenda-se um pouco de treino para que ${heroi.nome} ganhe forças!`);        
    if (perguntarLoopSimNao("Deseja treinar um pouco? (S - Sim; N - Não):  "))    
        do {
          limparConsole();
          if (qtdTreino > limiteTreino)  {
            println("Por hoje é só! Cuidado com a exaustão!");
            pularLinha();
            break;
          }
          heroi.treinar(nivelForcaTreino);           
          println(`Boaaaaa! Treino ${qtdTreino} executado com perfeição!`);
          qtdTreino++;
        } while(perguntarLoopSimNao("Continuar treino? (S - Sim; N - Não): "));     
    pause();      
    limparConsole();        
}

const trabalhar = (heroi, nivel) => {
    limparConsole();
    println(`Seria bom ${heroi.nome} ganhar algumas moedas.`);

    /*
        Similar a regra de treino, no modo fácil o valor do pagamento será maior, 
        além de que será possível trabalhar mais vezes.
        Consequentemente, o personagem poderá adquirir mais moedas.
    */
    const pagamentoTrabalho = nivel === nivelFacil ? pagamentoTrabalhoFacil : pagamentoTrabalhoDificil;    
    const limiteTrabalho = nivel === nivelFacil ? qtdMaximaTrabalhoFacil : qtdMaximaTrabalhoDificil;

    //Executa o trabalho até o usuário informar que não quer mais ou atingir o limite máximo permitido
    let qtdTrabalho = 1;
    if(perguntarLoopSimNao("Deseja trabalhar um pouco para ganhar uns trocados? (S - Sim; N; N - Não): ")) {
        do {
            limparConsole();

            if (qtdTrabalho > limiteTrabalho) {
                println("A vida não é só trabalho amigo!");
                println("Desanse um pouco!");
                pularLinha();
                pause();
                break;
            }

            heroi.ganharMoeda(pagamentoTrabalho);
            println(`${qtdTrabalho} - Parabéns pelo trabalho ${heroi.nome}!`);
            qtdTrabalho++;
        } while (perguntarLoopSimNao("Continuar trabalhando? (S - Sim; N - Não): "));
    }
}