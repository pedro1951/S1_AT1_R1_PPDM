//Exercício 1 — Atributos

class Livro {
    constructor(titulo, autor, anoPublicacao, numeroPaginas) {
        this.titulo 
        = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
    }
getTitulo() {
     return this.titulo;
}


     getAutor() {
        return this.autor;
    }
}

let livro = [
 new Livro ("cachorro bob", "pedro bettim", 2026, 110 )
]

console.log(livro);