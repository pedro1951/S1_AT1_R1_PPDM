const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const email = document.getElementById("email")
const rg = document.getElementById("rg")
const phone = document.getElementById("phone")
const form = document.getElementById("formulario")
const msgError = document.getElementById("msgError")[0];


nome.addEventListener("input", (event) => {
    console.log("nome digitado", event.target.value)

const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

console.log(regex.test(event.target.value))

    if (event.target.value.length < 3) {
        console.log("o nome precisa ser maior que 3 caracteres")
    }

    if(!regex.test(event.target.value)){
        console.log("nome invalido")
    }
})


phone.addEventListener("input", (event) => {
    let valorTelefone = event.target.value;

    valorTelefone = valorTelefone.replace(/\D/g, "")


//let nova = "ola mundo".replace("mundo", "js"); 

// coloca parênteses no DDD
    valorTelefone = valorTelefone.replace(/^(\d{2})(\d)/g, "($1) $2");

// coloca o traço
    valorTelefone = valorTelefone.replace(/(\d{5})(\d)/, "$1-$2");


    valorTelefone = valorTelefone.substring(0, 15)

event.target.value = valorTelefone;


})


idade.addEventListener("input", (event) =>{
    let idade = event.target.value.replace(/\D/g, "");
    console.log(idade);
})


email.addEventListener("input", (event) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(regexEmail.test(event.target.value))

  if(!regexEmail.test(event.target.value)){
    console.log("e-email invalido")
  }
})


rg.addEventListener("input", (event) => {
    let valorRG = event.target.value;

    valorRG = valorRG.replace(/\D/g, "");

    valorRG = valorRG.substring(0, 9);

    valorRG = valorRG.replace(/(\d{2})(\d)/, "$1.$2");
valorRG = valorRG.replace(/(\d{3})(\d)/, "$1.$2");
valorRG = valorRG.replace(/(\d{3})(\d)/, "$1-$2");

event.target.value = valorRG
})

const createDisplayMsgError = (mensagem) => {
    msgError.textContent = mensagem;

    setTimeout(() => {
        msgError.textContent = "";
    }, 5000)
}




const checkNome = () => {
      const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

      return nomeRegex.test(nome.value) && nome.value.langth > 3;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(!checkNome()){
        createDisplayMsgError("nome invalido")
        return
    }

    console.log("nome invalido")
})




