const creditoFinais = require("../fases/creditosFinais");
const fase1 = require("../fases/fase1");
const fase2 = require("../fases/fase2");
const fase3 = require("../fases/fase3");
const faseFinal = require("../fases/faseFinal");
const gameOver = require("../fases/gameOver");
const introducao = require("../fases/introducao");
const { limparConsole, pause } = require("../utils/utils")

//Lógica onde ocorre o controle de fases
//Conforme houver o avanço, novas fases são chamadas
module.exports = (nivel) => {
    limparConsole();   

    const heroi = introducao(nivel);   
    const dataFase = {nivel, heroi, fase: null};     
    const fases = [fase1, fase2, fase3, faseFinal];   

    for (let i = 0; i < fases.length; i++) {
      dataFase.fase = fases[i];
      if (!chamaFase(dataFase)) {    
        pause();    
        gameOver();              
        return; 
      }
      pause();
    }    

    creditoFinais(heroi);
    pause();
}

const chamaFase = ({nivel, heroi, fase}) => {
  if (fase(nivel, heroi))
    return true;

  return heroi.indestrutivel;
}