const produtos = [
  {
    nome: "Coca Cola",
    descricao:
      "O sabor clássico que atravessa gerações. Refrescante, marcante e perfeito para acompanhar qualquer momento do seu dia.",
    cor: "#f40009",
    logo: "./assets/images/cocaCola_logo.png",
    imagem: "./assets/images/coca_cola.png",
  },
  {
    nome: "Sprite",
    descricao:
      "Refrescância intensa com sabor de limão e lima. Uma bebida leve, gaseificada e perfeita para quem busca uma sensação gelada e revigorante.",
    cor: "#008b47",
    logo: "./assets/images/sprite_logo.svg",
    imagem: "./assets/images/sprite.png",
  },
  {
    nome: "Cotuba",
    descricao:
      "Refrigerante tradicional brasileiro com sabor único e marcante. Uma experiência diferente e nostálgica para quem aprecia sabores autênticos.",
    cor: "#ffd700",
    logo: "./assets/images/cotuba_logo.png",
    imagem: "./assets/images/cotuba.png",
  },
  {
    nome: "Fanta Laranja",
    descricao:
      "Explosão de sabor de laranja com muita refrescância. A escolha perfeita para quem gosta de bebidas doces, divertidas e cheias de energia.",
    cor: "#ff5f17",
    logo: "./assets/images/fantaLaranja_logo.png",
    imagem: "./assets/images/fantaLaranja.png",
  },
];

const container = document.getElementsByClassName("container__cards")[0];

produtos.forEach(() => {
  console.log(produto.cor)
  console.log(produto.nome)
  console.log(produto.descricao)

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = 
  `<div class="circle" style="--clr:${produtos.cor}">
          <img src="${produtos.logo}" alt="" class="logo" />
        </div>

        <div class="content">
          <h2>${produtos.nome}</h2>
          <p>${produtos.descricao}</p>
          <a href="#">Explore More</a>
        </div>
        <img src="./assets/images/coca_cola.png" alt="" class="product__img" />
      </div>
      <div class="card">
        <div class="circle" style="--clr: #008b47">
          <img src="${produtos.logo}" alt="" class="logo" />;
`;})