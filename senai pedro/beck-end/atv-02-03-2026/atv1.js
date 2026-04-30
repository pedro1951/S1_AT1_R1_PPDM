class produto {
    constructor (nome, categoria, preco, estoque){
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
    }

    getNome() {
        return this.nome;
    }

    getPreco() {
        return this.preco
    }
}

let Produto = [
 new produto ("sofa", "moveis", 3000, 50 )
]

console.log(Produto);