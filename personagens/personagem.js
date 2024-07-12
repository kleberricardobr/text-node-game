const { gerarForca, gerarNumeroRandomico, println } = require("../utils/utils");

class Personagem {

    constructor(nome, vida, forca, superPoderes = false) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.superPoderes = superPoderes;
    }

    atacar(inimigo) {        
        //A forca total é a força mais a vida
        const forcaTotal = this.forca + this.vida;

        //Caso esteja no modo fácil 
        //O herói terá superpoderes, do contrário
        //será o vilão
        //Com superpoderes, o valor mínimo do golpe no ataque aumentará
        let minForca = 1;
        if (this.superPoderes)
            minForca = Math.round(forcaTotal / 4); //valor mínimo do golpe

        //Com base na forca total, gera uma força de ataque
        let forcaGolpe = this.gerarForca(forcaTotal, minForca);                
        inimigo.defender(forcaGolpe);

        println(`Vida ${this.nome}: ${this.vida}`);
        println(`Vida ${inimigo.nome}: ${inimigo.vida}`);
    }

    defender(forca) {        
        this.vida -= forca;
        if(this.vida < 0)
            this.vida = 0;
    }
    
    gerarForca(forca, min) {
        return gerarNumeroRandomico(forca, min);
    }

    exibirDados() {
        println(`Força: ${this.forca}`);
        println(`Vida: ${this.vida}`);
        println(`Tem Super Poderes? ${this.superPoderes ? "Sim": "Não"}`);
    }

    exibirVida() {
        println(`Vida ${this.nome}: ${this.vida}.`);
    }

    estaVivo() {
        return this.vida > 0;
    }

}

module.exports = Personagem;