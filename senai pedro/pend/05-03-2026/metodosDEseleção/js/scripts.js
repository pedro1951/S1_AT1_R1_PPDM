//getElementByid: retorna apenas um elemento html

const menu = document.getElementById("menu");

//getElementsByClassName: retorna uma htmlcollection (coleção de elementos), mesmo que tinha so 1
//htmlcollection: tem indice (colecao, tem .length)
const company = document.getElementsByClassName("company")
const companyText = document.getElementsByClassName("compane-text")
const textRodape = document.getElementsByClassName("h2");
const titulo = document.querySelector(".company #titulo")
const texto = document.querySelectorAll(".company .company-text")

console.log("header Capturado pelo Dom", menu);
console.log(company[0]);
console.log(companyText[1]);
console.log(companyText);
for (let i = 0; i < companyText.length; i++) {
    console.log(companyText[i]);
}

console.log(textRodape)
console.log(titulo)
console.log(texto)
