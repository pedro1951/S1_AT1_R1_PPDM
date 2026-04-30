console.log("hello!");

// a classe e ideia, planta, o projeto
// sistema biblioteca: reservar, devolver, emprestar
class Livro{

    // metodos: são as funções que pertencem a classe, e representa açãos
    // que o objeto pode executar
    reservar(){
 console.log("Livro reservado")
    }
}
// livro1 e a variavel que guarda a instancia do objeto criado
let livro1 = new Livro();
livro1.reservar();


class cachorro{
  // atributos: são os dados que nosso objeto possui.
  //constructor: metodo especial que ele e executado automaticamente sempre
  // que criamos um objetivo, para iniciar nossos atributos

  // nome&idade são os parametros chegando no constructor.
  //utilizamos o THIS para falar o atributo nome&idade deste objeto esta sendo criado

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }

    latir(){
        console.log("o cachorro esta latindo!")
    }
}


let dog = new cachorro("rex", 12);
console.log("o nome do cachorro e:" ,dog.nome)