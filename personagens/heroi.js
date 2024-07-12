const { println } = require("../utils/utils");
const Personagem = require("./personagem");

class Heroi extends Personagem {
    moeda = 0;

    constructor(nome, 
                vida, 
                forca, 
                superPoderes = false, 
                indestrutivel = false) {
        super(nome, vida, forca, superPoderes);
        //Caso o jogador tenha descobrido o código secreto
        this.indestrutivel = indestrutivel;
    }

    defender(forca) {
        //Se for indestrutível não perderá vida ao defender-se de golpes
        if (!this.indestrutivel)
            super.defender(forca);
    }

    treinar(forca) {
        this.forca += forca;
    }

    ganharVida(valor) {
        this.vida += valor;
    }

    ganharMoeda(valor) {
        this.moeda += valor;
    }

    comprarVida(valor, total) {
        if (!this.podeComprar(total))
            return;

        this.vida += valor;
        this.moeda -= total;
        println(`Mais vida adquirida!`);
    }

    comprarForca(valor, total) {
        if (!this.podeComprar(total))
            return;

        this.forca += valor;
        this.moeda -= total;
        println(`Mais força adquirida!`);
    }

    podeComprar(total) {
        if (total > this.moeda) {
            println("Saldo insuficiente!");
            return false;
        }

        return true;
    }

    exibirDados() {
        super.exibirDados();
        println(`Moedas: C$${this.moeda}`);
    }

    mensagemAposBatalha(inimigo) {
        if(this.estaVivo()) {
            println(`WOWWWWW!!! ${this.nome} acabou com ${inimigo.nome}!!!`);                    
        } else {
            println(`Não foi dessa vez! O inimigo era forte demais...`);
        }
    }
}

module.exports = Heroi;