class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }
    acelerar(valor) {
        this.velocidade += valor;
        console.log(`velocidade atual: ${this.velocidade} km/h`);
    }

    frear(valor) {
        this.velocidade -= valor;
        if (this.velocidade < 0) this.velocidade = 0;
        console.log(`velocidade reduzida para: ${this.velocidade} km/h`);
    }

    exibirInformacoes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

class Caminhao extends Veiculo {
    constructor(marca, modelo, ano, capacidadeCarga, quantidadeEixos) {
        super(marca, modelo, ano); 
        this.capacidadeCarga = capacidadeCarga;
        this.quantidadeEixos = quantidadeEixos;
    }

    carregarCarga(peso) {
        console.log(`carregando ${peso}kg. capacidade total: ${this.capacidadeCarga}kg.`);
    }

    descarregarCarga() {
        console.log("carga descarregada.");
    }
}

const meuCaminhao = new Caminhao("volvo", "FH 540", 2023, 40000, 6);
console.log(meuCaminhao.exibirInformacoes());
meuCaminhao.acelerar(120);