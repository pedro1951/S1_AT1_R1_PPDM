const produtos = [
  { id: 1, nome: "Notebook", categoria: "Eletrônicos", preco: 3500 },
  { id: 2, nome: "Mouse", categoria: "Eletrônicos", preco: 80 },
  { id: 3, nome: "Camiseta", categoria: "Roupas", preco: 50 },
  { id: 4, nome: "Calça", categoria: "Roupas", preco: 120 },
  { id: 5, nome: "Geladeira", categoria: "Eletrodomésticos", preco: 2000 }
];


// const produtosFiltrados = produtos.filter ((produto) => {
//     return produto.categoria === "Roupas" || produtos.categoria === "eletrodomesticos"
// })

// console.log ("Roupas e eletrodomesticos:", produtosFiltrados)


// const numero = [1, 2, 3, 4];
// const numeroDobrados = []
// for (let i = 0; i < numero.length; i++){
// numeroDobrados.push(numero[i] * 2)
// }

// numero.forEach((n) => {
// numeroDobrados.push(n * 2)
// })

// console.log(numeroDobrados)


// const produtosFiltrados = produtos.filter ((produto) => {
//     return produto.categoria === "Eletrônicos" || produtos.categoria === "Eletrônicos"
// })

// console.log ( produtosFiltrados)





const produtosFiltrados = produtos.filter ((produto) => {return produto.categoria === "Eletrônicos"})
.map((produto) => { return produto.name})

console.log(produtosFiltrados)
