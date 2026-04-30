class aluno {
    notaFinal; 

    constructor(nome, matricula, notaFinal) {
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = notaFinal;
    }

    getNome() {
        return this.nome;
    }

    getMatricula() {
        return this.matricula;
    }

    getNotaFinal() {
        return this.notaFinal;
    }

}

let Aluno = new aluno( "arthur", 110, 10 )

console.log(Aluno)


