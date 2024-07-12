const sobre = require("../sobre");
const { perguntar, println, limparConsole, pularLinha } = require("../utils/utils");
const menuSelNivel = require("./menuSelNivel");

module.exports = () => {

    let sair = false;
    let resposta = ""
    limparConsole();        
    while(!sair) {        
        
        println("1. Iniciar o Jogo");
        println("2. Sobre");
        println("3. Sair");

        pularLinha();

        switch(perguntar(`Selecione a opção desejada: `)) {
            case "1":
                menuSelNivel();
                break;

            case "2":                
                //Detalhes sobre o desenvolvimento
                sobre();
                break;
                
            case "3":                
                sair = true;
                break;
                
            default: 
                limparConsole();
                println("Opção inválida!");                                            
        }
    }

}