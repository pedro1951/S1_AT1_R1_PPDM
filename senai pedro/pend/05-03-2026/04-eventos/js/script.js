const btnEvent = document.getElementById("btnEvent");
const nome = document.getElementById("nome");


btnEvent.addEventListener("click", () => {
    console.log("botao clicado")
})


btnEvent.addEventListener("mouseove", () => {
    btnEvent.style.backgroundColor = "red"
})


btnEvent.addEventListener("mouseove", () => {
    btnEvent.style.backgroundColor = "blue"
})


btnEvent.addEventListener("input", () => {
    nome.addEventListener = "red"
    console.log(nome.value)


    if (nome.value.length < 3){
        console.log("nome invalido")
    }

})

    senha.addEventListener("keydown", (event) => {
        console.log(event)
        console.log(event.key)
    })
