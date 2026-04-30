class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar() {
        return `ola, meu nome e ${this.nome} e tenho ${this.idade} anos, meu e email e ${this.email}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, email, disciplina) {
        super(nome, idade, email); 
        this.disciplina = disciplina;
    }

    darAula() {
        return `iniciando a aula de ${this.disciplina}.`;
    }
}

class Coordenador extends Pessoa {
    constructor(nome, idade, email, setor) {
        super(nome, idade, email, );
        this.setor = setor;
    }

    organizarReuniao() {
        return `organizando reuniao na sala: ${this.setor}.`;
    }
}

let pessoa = new Pessoa ("Pedro", 16, "pedro10@email.com" );
let professor = new Professor("paulo", 54, "paulo110@email.com", "matematica" );
let condenador = new Coordenador("rafaela", 36, "rafaela123@email.com", "diretoria" )

console.log("apresentacao do aluno:", pessoa.apresentar());
console.log(professor.darAula());
console.log(condenador.organizarReuniao());