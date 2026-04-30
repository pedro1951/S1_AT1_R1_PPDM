class Pedido {
    constructor(numeroPedido, cliente, valorTotal, status) {
        this.numeroPedido = numeroPedido;
        this.cliente = cliente;
        this.valorTotal = valorTotal;
        this.status = status;
    }

    adicionarValor(valor) {
        if (valor > 0) {
            this.valorTotal += valor;
            console.log("valor de R$ " + valor + " adicionado. total: R$ " + this.valorTotal);
        } else {
            console.log("erro: O valor deve ser maior que 0.");
        }
    }

    finalizarPedido() {
        return this.status = "finalizado";
    }
}

let pedido = new Pedido(10, "alvares", 200.00, "aberto")



console.log(pedido)
console.log(pedido.finalizarPedido())