const creditosFinais = require("../fases/creditosFinais");
const fase1 = require("../fases/fase1");
const fase2 = require("../fases/fase2");
const fase3 = require("../fases/fase3");
const gameOver = require("../fases/gameOver");
const introducao = require("../fases/introducao");
const { vidaNivelFacil, forcaInicialFacil, nivelFacil, vidaNivelDificil, forcaInicialDificil, nivelDificil } = require("../niveis");
const Heroi = require("../personagens/heroi");
const { println, gerarNumeroRandomico, pularLinha, pause } = require("../utils/utils")

module.exports = () => {
    println("Executando testes...");
    //Função randômica
    testarFuncaoRandomica();
    pularLinha();    

    testarIntroducao();
    pularLinha();

    //Testando fase 1
    println("Iniciando testes fase 1");
    pause();
    testarFase1();    
    println("Testes fase 1 finalizados");
    pularLinha();

    //Testando fase 2
    println("Iniciando testes fase 2");
    pause();
    testarFase2();    
    println("Testes fase 2 finalizados");
    pularLinha();

    //Testando fase 3
    println("Iniciando testes fase 3");
    pause();
    testarFase3();    
    println("Testes fase 3 finalizados");
    pularLinha();

    testarGameOver();
    testarCreditosFinais();
}

const assert = (condicao, texto) => {
    if (!condicao)
        throw new Error(texto);
}

const testarFuncaoRandomica = () => {
    println("Testando função radômicas");

    const numeros = [];
    for (let i = 5; i <= 20; i++)
        numeros.push(i);
    
    let numeroSorteado = 0;
    let index = -1;
    let qtdTentativas = 1;
    const qtdMaxTentativas = 1000;    

    //Tenta até qtdMaxTentativasser < qtdTentativas
    //O objetivo é sortear dos os número no range para confirmar
    //que a função está Ok
    while(numeros.length > 0) {        
      numeroSorteado = gerarNumeroRandomico(20, 5);
      println(`Número sorteado: ${numeroSorteado}. Range [5, 20]`);
      assert(numeroSorteado >= 5 && numeroSorteado <= 20, `O número está fora do range definido: [5, 20]`);      

      index = numeros.indexOf(numeroSorteado);
      if (index >= 0)
        numeros.splice(index, 1);      

      qtdTentativas++;

      assert(qtdTentativas < qtdMaxTentativas, `Número de tentativas execedidas! Nem todos os número foram gerados.`);
    }

    println("Teste da função randômica executado com sucesso!");
}


//Permite o usuário testar as fases de forma isolada
const testarFases = (nivel, heroi, fase) => {
    println("Iniciando testes de fase");
    try {
        const resultado = fase(nivel, heroi);
        println(`A fase retornou: ${resultado ? "Herói venceu": "Herói perdeu"}`);    
    } catch (error) {
        console.error(`Houve um erro não tratado durante testes da fase. Erro: ${error}`);   
    }    

    println("Finalizado testes de fase");
}

//Retornar um tipo de heró de acordo com o nível de dificuldade
const getHeroi = (nivel) => {
    if (nivel == nivelFacil)
        return new Heroi("Testes", vidaNivelFacil, forcaInicialFacil, true, false);
    return new Heroi("Testes", vidaNivelDificil, forcaInicialDificil, false, false);
}


//Receber a função fase como parâmetro e executar os testes
//tento para nível fácil quanto difícil
const testarNiveisFase = (fase) => {
    println("Testando nível fácil");    
    pause();
    testarFases(nivelFacil, getHeroi(nivelFacil), fase);

    println("Testando nível difícil");    
    pause();
    testarFases(nivelDificil, getHeroi(nivelDificil), fase);
}

const testarFase1 = () => {
    testarNiveisFase(fase1);
}

const testarFase2 = () => {
    testarNiveisFase(fase2);
}

const testarFase3 = () => {
    testarNiveisFase(fase3);
}

const testarGameOver = () => {
    println("Testando Game Over");
    gameOver();
    println("Finalizado testes do Game Over");
}

const testarIntroducao = () => {
    println("Testando introdução do Jogo");

    //Valida de a introdução retornará um herói válido
    //Objeto deverá está instanciado e atributo nome preenchido
    println("Testando introdução no modo fácil");
    pause();
    const heroiFacil = introducao(nivelFacil);
    assert(heroiFacil, `A introdução no modo fácil não retornou um herói`)
    assert(heroiFacil.nome.trim() !== "", "A introdução no modo fácil retornou um nome inválido para herói");

    println("Testando introdução no modo difícil");
    pause();
    const heroiDificil = introducao(nivelDificil);
    assert(heroiDificil, `A introdução no modo difícil não retornou um herói`)
    assert(heroiDificil.nome.trim() !== "", "A introdução no modo difícil retornou um nome inválido para herói");

    println("Finalizado testes da introdução do Jogo");
}

const testarCreditosFinais = () => {
    println("Testando créditos finais");
    const result = creditosFinais(getHeroi(nivelFacil));
    assert(result, "Crédito finais deve retornar true!");
    println("Testes dos créditos finais realizado com sucesso!");
}