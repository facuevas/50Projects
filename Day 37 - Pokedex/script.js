const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokemonId = pokemon.id.toString().padStart(3, "0");

  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  const pokemonType = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);
  const pokemonTypeFormatted =
    pokemonType[0].toUpperCase() + pokemonType.slice(1);

  const backgroundColor = colors[pokemonType];

  pokemonCard.style.backgroundColor = backgroundColor;

  pokemonCard.innerHTML = `      
    <div class="img-container">
        <img
        src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
        alt=""
        />
    </div>
    <div class="info">
        <span class="number">${pokemonId}</span>
        <h3 class="name">${pokemonName}</h3>
        <small class="type">Type: ${pokemonTypeFormatted}</small>
    </div>
  </div>`;

  pokeContainer.appendChild(pokemonCard);
};

fetchPokemons();
