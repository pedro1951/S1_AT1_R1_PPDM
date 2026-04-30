class Professor{
    constructor(nome) {
        this.nome = nome;
    }
}

class Curso {
    constructor(nome, professor){
        this.nome = nome;
        this.professor = professor;
    }

    mostrarCurso(){
        return `curso: ${this.nome} - Professor: ${this.professor.nome}`
    }
}

const prof = new Professor("matheus");
const curso = new Curso("javaScript", prof)

console.log(curso.mostrarCurso());


//---------------------------------------
class Motorista{
    constructor(nome, carroAtual){
 this.nome = nome;
 this.carroAtual = null;
    }

    entrarNoCarro(carro){
        this.carroAtual = carro
        carro.motorista = this.nome

        return `${this.nome} entrou no carro %{carro.modelo}`
    }

sairDoCarro(){
            console.log( `${this.nome} saiu do carro ${this.carroAtual.modelo}`)
  if (this.carroAtual){
        this.carroAtual.motorista = null;
        this.carroAtual = null;
    }
}
}

class Carro {
    constructor(modelo, placa, motorista){
        this.modelo = modelo;
        this.placa = placa;
        this.motorista = null;
    }
}

const motorista = new Motorista("pedro");
const carro1 = new Carro("NSX", "ABC-1234");
const carro2 = new Carro("Mclaren", "F1-1988");

console.log(motorista.entrarNoCarro(carro1));
motorista.sairDoCarro();
