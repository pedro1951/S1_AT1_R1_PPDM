const container = document.getElementById("container");
const paginacao = document.querySelector("#paginacao");

let todosPilotos = [];
let paginaAtual = 1;
const itensPagina = 12;

const imagensPilotos = {
  "lando norris":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp",
  "oscar piastri":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp",
  "lewis hamilton":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp",
  "charles leclerc":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp",
  "george russell":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp",
  "kimi antonelli":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp",
  "esteban ocon":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp",
  "oliver bearman":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp",
  "max verstappen":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp",
  "isack hadjar":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp",
  "liam lawson":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/lialaw01/2026racingbullslialaw01right.webp",
  "arvid lindblad":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp",
  "pierre gasly":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp",
  "franco colapinto":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp",
  "nico hulkenberg":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp",
  "gabriel bortoleto":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp",
  "carlos sainz":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp",
  "alexander albon":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp",
  "sergio perez":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp",
  "valtteri bottas":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp",
  "fernando alonso":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp",
  "lance stroll":
    "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp",
};

const imagensCarros = {
  mercedes:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp",
  ferrari:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/ferrari/2026ferraricarright.webp",
  mclaren:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarencarright.webp",
  "haas f1 team":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/haas/2026haascarright.webp",
  "red bull racing":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.webp",
  "racing bulls":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.webp",
  alpine:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/alpine/2026alpinecarright.webp",
  audi: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/audi/2026audicarright.webp",
  williams:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/williams/2026williamscarright.webp",
  cadillac:
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaccarright.webp",
  "aston martin":
    "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.webp",
};

async function carregarPilotos() {
  try {
    const res = await fetch(
      "https://api.openf1.org/v1/drivers?session_key=latest"
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar dados da API");
    }

    todosPilotos = await res.json();
    renderizarPilotos();
  } catch (error) {
    console.log(error);
  }
}

function renderizarPilotos() {
  container.innerHTML = "";

  const inicio = (paginaAtual - 1) * itensPagina;
  const fim = inicio + itensPagina;
  // todosPilotos = 22 pilotos
  // 0 até 11 porém no slice tem que estar de 0 até 12
  const pilotosPaginas = todosPilotos.slice(inicio, fim);

  pilotosPaginas.forEach((piloto) => {
    const nomePiloto = `${piloto.first_name} ${piloto.last_name}`.toLowerCase();
    const imagemPiloto = imagensPilotos[nomePiloto];
    const imagemCarros = buscarCarro(piloto.team_name);

    const card = document.createElement("div");
    card.classList.add("card");

    card.style.backgroundColor = `#${piloto.team_colour}`;
    card.style.boxShadow = `1px 1px 5px #${piloto.team_colour}`;

    card.innerHTML = `
    <img class="car" src="${imagemCarros}" alt="${piloto.team_name}"/>
    <img class="piloto" src="${imagemPiloto}" alt="${piloto.first_name}${piloto.last_name}"/>
    <h2>${piloto.first_name}<span>${piloto.last_name}</span></h2>
    <p>${piloto.team_name}</p>
    `;

    container.append(card);

  });

  renderizarBotoes();
}

function buscarCarro(teamName) {
  const nome = teamName.toLowerCase();

  if (nome.includes("mercedes")) return imagensCarros["mercedes"];
  if (nome.includes("ferrari")) return imagensCarros["ferrari"];
  if (nome.includes("mclaren")) return imagensCarros["mclaren"];
  if (nome.includes("haas")) return imagensCarros["haas f1 team"];
  if (nome.includes("red bull")) return imagensCarros["red bull racing"];
  if (nome.includes("racing bulls")) return imagensCarros["racing bulls"];
  if (nome.includes("alpine")) return imagensCarros["alpine"];
  if (nome.includes("audi")) return imagensCarros["audi"];
  if (nome.includes("williams")) return imagensCarros["williams"];
  if (nome.includes("cadillac")) return imagensCarros["cadillac"];
  if (nome.includes("aston")) return imagensCarros["aston martin"];

  return null;
}

function renderizarBotoes(){
  paginacao.innerHTML = "";

  const totalPaginas = Math.ceil(todosPilotos.length / itensPagina)

  for (let i = 1; i <= totalPaginas; i++){
    const btn = document.createElement("button")
    btn.textContent = i;

    if (i === paginaAtual) {
      btn.classList.add("ativo")
    }

    btn.onclick = () => {
      paginaAtual = i;
      renderizarPilotos();
    }

    paginacao.append(btn)

      }
    }

    carregarPilotos();