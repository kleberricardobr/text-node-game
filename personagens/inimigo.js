const { nivelFacil, vidaMonstroNivelFacil, vidaMonstroNivelDificil, forcaInicialDificil, forcaInicialFacil, nivelDificil, forcaInicialInimigoFacil, forcaInicialInimigoDificil } = require("../niveis");

const Personagem = require("./personagem");

//O inimigo possui apenas atributo e métodos herdados
//Criada a class apenas para caso necessite de novos
//recursos em uma futura melhoria
class Inimigo extends Personagem {

    //Método de classe(estático) para gerar um novo inimigo
    static getNewInimigo(nome, nivel) {
        //Nível fácil, o vilão terá menos vida
        const vidaVilao  = nivel == nivelFacil ? vidaMonstroNivelFacil : vidaMonstroNivelDificil;

        //Nível fácil, a força do vilão será menor
        const forcaVilao = nivel == nivelFacil ? forcaInicialInimigoFacil : forcaInicialInimigoDificil;

        //Se for nível difícil, o vilão terá superpoderes
        const temSuperPoderes = nivel === nivelDificil;
                                                                
        return new Inimigo(nome, vidaVilao, forcaVilao, nivel === nivelDificil);
    }
}

module.exports = Inimigo;

