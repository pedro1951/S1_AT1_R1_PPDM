class Quarto{
    constructor(nome){
        this.nome = nome;
    }
}

class casa {
    constructor(){
        this.Quarto = [
            new Quarto("quarto do casal"),
            new Quarto("quaro do filho preferido"),
            new Quarto("quaro do filho não preferido")

        ]
    }
}

const Casa = new casa();
console.log(Casa.Quarto);

//--------------------------------------

class Itempedido{
    constructor(produto, quantidade){
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

class Pedido {
    constructor(){
        this.itens = [];
    }

    adicionarItem(nome, quantidade){
        const novoItem = new Itempedido(nome, quantidade);

        this.itens.push(novoItem);
    }
}

const compra = new Pedido();
compra.adicionarItem("monitor", 2);
console.log(compra);