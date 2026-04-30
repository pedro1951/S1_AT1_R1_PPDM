//Exercício 2 — Métodos

class Conta {
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

    getconsultarSaldo() {
        return this.saldo;
    }
}

const conta = new Conta (50, "pedro", 1000000000);
conta.depositar(2000);
console.log("saldo da conta", conta.getconsultarSaldo());
console.log(conta.sacar(1000));
console.log("saldo da conta", conta.getconsultarSaldo());
