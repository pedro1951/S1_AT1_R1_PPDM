// escapsulamento: e como os dados são acessados
// e modificados

class conta{
    #saldo
    constructor(saldo){
        this.#saldo = saldo
    }

    depositar(valor){
        if(valor > 0) {
            this.#saldo = this.#saldo + valor;
            this.#saldo += valor;
        }else {
            return "valor invalido para deposito"
        }
    }


sacar(valor) {

    if (valor > 0 && valor <= this.#saldo) {

    }else {
        return `saque invalido`
    }
}

getSaldo() {
    return this.#saldo;
}
}



const conta = new conta(1000);
conta.depositar = (500);
console.log("saldo da minha conta ", conta.getSaldo())