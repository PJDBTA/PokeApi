const input = document.querySelector("#input-pokemon");
const form = document.querySelector("#form");
const namePokemon = document.querySelector("#pokemon-name");
const imgPokemon = document.querySelector("#pokemon-img");
const listPower = document.querySelector("#listPower");

form.onsubmit = async function(event) {
    event.preventDefault();
    console.log(input.value);

    const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    console.log(data.sprites.other);


    namePokemon.textContent = data.name;
    imgPokemon.src = data.sprites.other["official-artwork"].front_default;

    listPower.innerHTML = `<li style="list-style: none;">Sus poderes son:</li>`;

    for(const elementos in data.abilities){
        const abilities = data.abilities[elementos].ability.name;
        console.log(abilities);

        //template string
        listPower.innerHTML += `<li> ${abilities} </li>`;
    }
}

function renderItemList(name){
    return `
    <div class="bg-white rounded text-center">
            <img id="pokemon-img" src="/img/004.png" alt="" class="">
            <h1 id="pokemon-name" class="font-semibold text-lg">${name}</h1>
        </div>

    `;
}