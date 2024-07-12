//Iniciar o jogo chamando as fases

const controlaFases = require("../controlaFases");
const { pause, println, limparConsole } = require("../utils/utils");

//O nível representa o grau de dificuldade selecionado no menu inicial
module.exports = (nivel) => {
    limparConsole();
    println("Prepare-se pois o jogo vai começar...");
    pause();
    limparConsole();    
    controlaFases(nivel)
}