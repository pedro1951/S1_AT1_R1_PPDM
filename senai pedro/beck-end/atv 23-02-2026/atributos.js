//Exercício 1 — Atributos

class Livro {
    constructor(titulo, autor, anoPublicacao, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
    }
getTitulo() {
     return this.titulo;
}


     getAutor() {
        return this.autor;
    }
}




















 //Exercício 2 — Métodos

class ContaBancaria {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`deposito de R$${valor} realizado`);
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`saque de R$${valor} realizado.`);
        } else {
            console.log("saldo insuficiente ou valor invalido");
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

// Exercício 3 — Encapsulamento

class Funcionario {
    #salario;

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario;
    }

    getNome() {
        return this.nome;
    }

    getCargo() {
        return this.cargo;
    }

    getSalario() {
        return this.#salario;
    }

    setSalario(valor) {
        if (valor > 0) {
            this.#salario = valor;
        } else {
            console.log("salario deve ser um valor positivo");
        }
    }
}

// Exercício 4 — Herança

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`${this.modelo} ligado`);
    }

    desligar() {
        console.log(`${this.modelo} desligado`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroPortas) {
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    abrirPorta() {
        console.log("porta aberta");
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log("dando grau (empinando a moto)");
    }
}