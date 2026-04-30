class Paciente {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    relatarSintomas() {
        return "sinto dor de cabeça constante.";
    }

    marcarConsulta(medico) {
        console.log(`paciente ${this.nome} marcou consulta com dr. ${medico.nome}`);
    }
}

class Medico {
    constructor(nome, especialidade, crm) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.crm = crm;
    }

    atenderPaciente(paciente) {
        console.log(`atendendo o paciente ${paciente.nome}`);
    }

    emitirReceita(paciente) {
        return `receita para ${paciente.nome}: tomar analgesico de 8 em 8 horas.`;
    }
}

const medico = new Medico("dr. silva", "cardiologia", "crm/sp 12345");
const paciente = new Paciente("carlos oliveira", 45, "123.456.789-00");

medico.atenderPaciente(paciente);
paciente.marcarConsulta(medico);
console.log(medico.emitirReceita(paciente));
console.log(paciente.relatarSintomas());



