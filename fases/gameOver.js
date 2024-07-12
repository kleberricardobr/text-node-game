const { limparConsole, println, pause } = require("../utils/utils")

//Função para caso o herói perca
module.exports = (texto) => {
    limparConsole();
    println("Não foi dessa vez :(");
    texto || "" != "" ? println(texto): null;
    println("Game Over".toLocaleUpperCase());    
    pause();
}