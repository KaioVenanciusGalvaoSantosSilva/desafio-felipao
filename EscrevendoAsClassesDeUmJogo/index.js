class hero {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = ""
        let tipo = this.tipo;

        switch (true) {
            case (tipo == "mago"):
                ataque = "magia";
                break;

            case (tipo == "guerreiro"):
                ataque = "espada";
                break;


            case (tipo == "monge"):
                ataque = "artes marciais";
                break;

            case (tipo == "ninja"):
                ataque = "shuriken";
                break;

            default:
                ataque = ""
        }

        console.log(`o ${tipo} atacou usando ${ataque}`);
    }

}

const hero1 = new hero('Patolino', 30, 'mago');
const hero2 = new hero('Kirito', 20, 'guerreiro');
hero1.atacar();
hero2.atacar();
