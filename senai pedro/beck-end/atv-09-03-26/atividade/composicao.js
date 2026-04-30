class Apartamento {
    constructor(numero, andar, area) {
        this.numero = numero;
        this.andar = andar;
        this.area = area;
    }

    exibirInformacoes() {
        return `apto ${this.numero}, ${this.andar}º andar, ${this.area}m².`;
    }
}

class Predio {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.apartamentos = [];
    }

    adicionarApartamento(numero, andar, area) {
        const novoApto = new Apartamento(numero, andar, area);
        this.apartamentos.push(novoApto);
    }

    listarApartamentos() {
        console.log(`edificio ${this.nome} - lista de unidades:`);
        this.apartamentos.forEach(ap => console.log(ap.exibirInformacoes()));
    }

    totalApartamentos() {
        return this.apartamentos.length;
    }
}



const meuPredio = new Predio("residencial aurora", "rua das flores, 123");
meuPredio.adicionarApartamento(102, 1, 60);
meuPredio.adicionarApartamento(201, 2, 75);
meuPredio.listarApartamentos();
console.log(`endereço: ${meuPredio.endereco}`);
