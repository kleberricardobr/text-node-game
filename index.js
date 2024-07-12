const menuPrincipal = require("./menus/menuPrincipal");
const testes = require("./testes");
const { println, pularLinha, perguntar, limparConsole, pause, gerarForca } = require("./utils/utils");
const nomeJogo = "Adventures in the Nodeland";

//Ponto de entrada do sistema
const main = () => { 
    //Mensagens iniciais
    println(`!!! ${nomeJogo.toUpperCase()} !!!`);
    println(`Seja Bem vindo!`);    
    pause();
    limparConsole();

    //Chama o menu principal
    menuPrincipal();

    pularLinha();
    println("O jogo está sendo finalizado. Até a próxima!");
}


/*
  Atenção: 
   - //Link do diagram no miro
     https://miro.com/app/board/uXjVKz4H_l4=/?share_link_id=466996377183

   - Para vida infinita, no momento de informar o nome do personagem, informe: ITalents

   - Vídeos demonstrando o jogo:
        --Primeiro vídeo
            https://drive.google.com/file/d/1I6ViP-ZT2-OibCQg57ARBkcsuzJU51SM/view?usp=sharing

        --Segundo vídeo
            https://drive.google.com/file/d/1I4t7oOKurIxWkphS_Bcy0ckxfLqlgcl4/view?usp=sharing

*/

//Executa o sistema
main();

/*
   Para executar testes comente o main()
   e descomente a linha abaixo.
   Será testada a função randômica ("Inteligência" do jogo),
   bem como cada um dos capítulos de forma separada
*/
//testes();
