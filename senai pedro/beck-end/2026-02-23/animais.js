class animal {
constructor(nome, idade, tipo, qtdpatas) {
    this.nome = nome;
    this.tipo = tipo;
    this.idade = idade; 
    this.qtdpatas = qtdpatas;
}

emitirSom(){
    if(this.tipo === "cachorro"){
        console.log("au, au");
    }else if(this.tipo === "macaco"){
        console.log("uh uh ah ah");
    }else {
        console.log("huuuuuung")
    }

}

class cachorro extends Animal {
    constructor(nome, tipo, idade, qtdpatas){
        super(nome);
        super(tipo);
        super(idade);
        super(qtdpatas);
    }
}




const girafa = new animal ("junin", "girafa", 5, 4);
const macaco = new animal ("george", "macaco", 3, 4); 
const cachorro = new animal ("scooby", "cachorro", 7, 4);

girafa.emitirSom();