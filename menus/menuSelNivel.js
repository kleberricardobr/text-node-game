const iniciarJogo = require("../iniciarJogo");
const { nivelDificil, nivelFacil } = require("../niveis");
const { limparConsole, println, perguntar, pularLinha } = require("../utils/utils")

//Menu com opções para iniciar o jogo
module.exports = () => {
    limparConsole();   
    
    let sair = false;
    let resposta = "";
    while (!sair) {
        descreveOpcoes();
        resposta = perguntar("Selecione a opção desejada: ");
        switch(resposta) {
            case nivelDificil:
            case nivelFacil:
                //chama o procedimento para inciar o jogo
                //passando como parâmetros o nível de dificuldade
                iniciarJogo(resposta);
                sair = true;
                break;

            case "3":
                sair = true;                
                break;    

            default:
                limparConsole();
                println("Opção inválida!");                
        }
    }

    limparConsole();
}

const descreveOpcoes = () => {
    println("Respire fundo! E escolha seu nível de dificuldade:");

    pularLinha();

    println(`${nivelFacil}. Fácil`);
    println(`${nivelDificil}. Difícil`);
    println("3. Voltar ao menu anterior");

    pularLinha();   
}