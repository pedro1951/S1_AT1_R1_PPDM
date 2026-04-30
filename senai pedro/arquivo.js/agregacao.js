class Periferico {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.conectado = false;
    }

    conectar() {
        this.conectado = true;
        console.log(`${this.nome} conectado.`);
    }

    desconectar() {
        this.conectado = false;
        console.log(`${this.nome} desconectado.`);
    }
}

class Computador {
    constructor(marca, processador) {
        this.marca = marca;
        this.processador = processador;
        this.perifericos = [];
    }

    adicionarPeriferico(periferico) {
        this.perifericos.push(periferico);
    }

    removerPeriferico(perifericoParaRemover) {
        this.perifericos = this.perifericos.filter(p => p !== perifericoParaRemover);
        console.log(`${perifericoParaRemover.nome} foi removido do computador.`);
    }

    listarPerifericos() {
        console.log(`Periféricos de ${this.marca}:`);
        this.perifericos.forEach(p => console.log(`- ${p.nome} (${p.tipo})`));
    }
}



const pc = new Computador("dell G15", "intel i7");
const mouse = new Periferico("Mouse Gamer", "USB");
const teclado = new Periferico("Teclado Mecânico", "Bluetooth");
console.log(pc.listarPerifericos());
