const prompt = require("prompt-sync")();

const println = (texto) => {
    console.log(texto);
}

const pularLinha = (nrLinhas = 1) => {
    for (let i = 1; i <= nrLinhas; i++) {
        console.log();
    }
}

const perguntar = (pergunta) => {        
    return prompt(pergunta);
}

const perguntarLoop = (pergunta) => {        
    let resposta = ""
    while(resposta.trim() === "") {
        resposta = perguntar(pergunta);
        
        if (resposta.trim() === "") {
            limparConsole();
            println("Resposta inválida");
        }
    }
    return resposta;
}

const perguntarLoopSimNao = (pergunta) => {
    let resposta = ""
    let respostaValida;
    while(!respostaValida) {
        resposta = perguntar(pergunta).toLocaleUpperCase().trim();
        
        respostaValida = ["S", "N"].indexOf(resposta) >= 0;
        if (!respostaValida) {
            limparConsole();
            println("Resposta inválida");
        }
    }
    return resposta === "S";
}

const pause = () => {
    perguntar("Pressione qualquer tecla para continuar...");
}

const limparConsole = () => {
    //Fonte: https://stackoverflow.com/questions/9006988/node-js-on-windows-how-to-clear-console
    process.stdout.write('\x1Bc');
}

const gerarNumeroRandomico = (max, min) => {
  //Fonte: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * (max - min + 1) ) + min;   
}

exports.println = println;
exports.pularLinha = pularLinha;
exports.perguntar = perguntar;
exports.limparConsole = limparConsole;
exports.pause = pause;
exports.gerarNumeroRandomico = gerarNumeroRandomico;
exports.perguntarLoop = perguntarLoop;
exports.perguntarLoopSimNao = perguntarLoopSimNao;