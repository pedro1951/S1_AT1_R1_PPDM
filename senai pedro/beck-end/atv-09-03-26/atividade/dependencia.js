class GeradorPDF {
    constructor(formato, autor) {
        this.formato = formato;
        this.autor = autor;
    }

    gerarPDF(conteudo) {
        console.log(`Gerando PDF no formato ${this.formato} por ${this.autor}...`);
    }

    salvarArquivo(nomeArquivo) {
        console.log(`Arquivo ${nomeArquivo}.pdf salvo com sucesso.`);
    }
}

class Relatorio {
    constructor(titulo, conteudo, dataCriacao) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.dataCriacao = dataCriacao;
    }

    gerarConteudo() {
        return `Título: ${this.titulo}\nData: ${this.dataCriacao}\nConteúdo: ${this.conteudo}`;
    }

    exportarPDF(gerador) {
        const corpo = this.gerarConteudo();
        gerador.gerarPDF(corpo);
    }
}


const meuGerador = new GeradorPDF("a4", "sistema central");
const meuRelatorio = new Relatorio("vendas mensais", "o lucro aumentou 15% em relaçao ao mes anterior.");
meuRelatorio.exportarPDF(meuGerador); 
meuGerador.salvarArquivo("relatorio final");



