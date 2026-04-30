const texto = document.getElementById("texto")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const message = document.getElementById("message")

function login() {
    console.log("email: ", email.value)
    console.log("senha", senha.value)
    if (email.value === "pedro51.com" && senha.value === "1234"){
        message[0].innerText = "login efetuado com sucesso"
        message[0].style.color = "green"
    }else {
          message[0].innerText = "login inalido "
        message[0].style.color = "red"
    }

    setTimeout(() => {
        message[0].innerText = "";   
     }, 2000)

}


















//textContent: manipula ou retorna todo o texto do elemento
console.log(texto)
console.log(texto.textContent)
texto.textContent = "ola terra"

console.log(txt[0].textContent);
console.log(txt[0].innerText);

txt[0].innerText = "testado"

txt[0].innerHTML = "<strong>texto em negrito</strong>"

function login(){
    console.log(nome.value)
}

txt[0].style.color = "red";
txt[0].style.fontSize = "40px";
txt[0].style.marginTop = "2000px";






const divMenu = document.getElementsByClassName("menu")[0];

divMenu.classList.add("ativo")
divMenu.classList.remove("menu")
divMenu.classList.toggle("ativo")
divMenu.classList.toggle("menu")

if (divMenu.classList.contains("ativo")){
    console.log("a classe ativo existe")
    } else {
console.log("class nao existe")
    }


    const button = document.getElementById("btn");

    function alterarClasse(){
        if (button.classList.contains("btnAtivo")){
            button.classList.remove("btnAtivo")
        }else{
            button.classList.add("btnAtivo")
        }+
    }
