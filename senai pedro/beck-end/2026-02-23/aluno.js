// exemplo poo aluno
class aluno{
    #cpf;
    //atributo: nome, matricula, curso e idade
    constructor(nome, matricula, curso, idade, cpf){
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.idade = idade;
        this.#cpf = cpf;
    }

    //metodos: getNome, getMatricula,

    getNome(){
        return this.nome
    }

getMatricula(){
    return this.matricula
}

getCpf() {
    return this.#cpf
}


}
//0
let fruta = ["uva", "tomate"];
console.log(fruta[0])


let aluno = [
    new aluno ("Pedro", "000001", "front-end", 17, "000"),
    new aluno ("Bettim", "000002", "banco de dados", 17, "111"),
    new aluno ("Pietro", "000003", "logica", 17, "222"),
    new aluno ("Paulo", "000004", "Iot", 17, "333")
]
//console.log(aluno[0].getNome());
//console.log(aluno[0].idade);

console.log(aluno.length)

for (let i = 0; i < aluno.length; i++) {
    console.log(aluno[i].getNome())
}

alunos[0].nome = "testing";
console.log(aluno[0].nome);

aluno[3].matricula = "000008";
console.log(aluno[3].cpf);



//classe: e a ideia, molde, projeto.
//objeto: e o que construimos a partir do molde (classe)
//metodos: são as funções pertencem a classe, e representam as ações que
//o objeto pode ter, executar.
//atributosaaaa; são os dados que o objeto pussui.