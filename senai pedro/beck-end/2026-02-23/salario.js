//poo: classe, metodo, atributos

class funcionarioCLT {
    constructor(nome, cpf, salarioBase, matricula){
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
        this.matricula = matricula;
    }

    calcularSalario() {
        return this.salarioBase * 2;

    }
}

class funcionarioPJ{

     constructor(nome, cpf, salarioBase, matricula){
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
        this.matricula = matricula;
    }

    calcularSalario() {
        return this.salarioBase * 0.9;

    }
}

class estagiario {
     constructor(nome, cpf, salarioBase, matricula){
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
        this.matricula = matricula;
    }

    calcularSalario() {
        return this.salarioBase * 0.8;

    }
}

const funcionarioClt = new funcionarioCLT("math", "111", 1000, "300");
const funcionarioPj = new funcionarioPJ("luiz", "211", 1000, "200");
const Estagiario = new estagiario("camargo", "131", 1000, "100");

console.log(funcionarioClt)
console.log(funcionarioPj)
console.log(Estagiario)
console.log(estagiario.calcularSalario())