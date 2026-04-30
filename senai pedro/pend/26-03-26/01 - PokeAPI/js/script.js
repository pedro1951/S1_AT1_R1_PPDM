// CONSUMIR API DO POKEMON
// Fetch --> API NATIVA UTILIZADA PARA FAZER REQUISIÇÕES HTTP
// Fetch --> é baseado em promises, utilizamos o metodo .then() para lidar com o resultado

// const response = fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Selecionando elememnto IMG, aonde será colocado a imagem do pokemon
const pokemonImage = document.querySelector(".pokemonImage");
// Selecionando elememnto SPAN, aonde será colocado o numero do pokemon
const pokemonNumber = document.getElementsByClassName("pokemonNumber")[0];
// Selecionando elememnto SPAN, aonde será colocado o nome do pokemon
const pokemonName = document.getElementsByClassName("pokemonName")[0];
const form = document.querySelector(".form");
const input = document.querySelector(".inputSearch");
const btnPrev = document.getElementsByClassName("btnPrev")[0];
const btnNext = document.getElementsByClassName("btnNext")[0];

// Variavel auxiliadora que vai guarda o pokemon
let pokemonAtual = 289;

const renderPokemon = async (pokemon) => {
  // Limpa o numero do pokemon
  pokemonNumber.innerHTML = "";

  // Enquanto busca os dados na API, mostra carregando
  pokemonName.innerHTML = "Carregando...";

  const data = await fetchPokemon(pokemon);

  console.log(data);

  if (data) {
    if (
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ]
    ) {
      pokemonImage.style.display = "block";
      pokemonImage.src =
        data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
          "front_default"
        ];
    } else if (
      data["sprites"]["versions"]["generation-v"]["black-white"][
        "front_default"
      ]
    ) {
      pokemonImage.style.display = "block";
      pokemonImage.src =
        data["sprites"]["versions"]["generation-v"]["black-white"][
          "front_default"
        ];
    } else {
      pokemonImage.style.display = "none";
    }

    pokemonNumber.innerHTML = data.id;

    pokemonName.innerHTML = data.name;

    pokemonAtual = data.id;
  } else {
    pokemonImage.style.display = "none";
    pokemonNumber.innerHTML = "";
    pokemonName.innerHTML = "Pokemon não encontrado!";
    input.value = "";
  }
};

// async / await
// async --> torna a função assincrona
// await --> espere até a resposta chegar ou espere até essa requisição terminar
// então no await o codigo pausa até chegar algum RESULTADO!
async function fetchPokemon(pokemon) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (res.status === 200){
    const data = res.json();
return data;
    }
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value.toLowerCase());
});

btnPrev.addEventListener("click", () => {
  if (pokemonAtual > 1) {
    pokemonAtual -= 1;

    renderPokemon(pokemonAtual);
  }
});

btnNext.addEventListener("click", () => {
  pokemonAtual += 1;

  renderPokemon(pokemonAtual);
});

renderPokemon(pokemonAtual);