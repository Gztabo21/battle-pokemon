


async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
}

/*  */

async function init(){
    const firstPokemon = await getPokemon(5)
    const oponentPokemon = await getPokemon(14)
    window.pokemon.textContent = firstPokemon.name
    window.imgPokemon.setAttribute('src',firstPokemon.sprites.front_default)

    window.oponentPokemon.textContent = oponentPokemon.name
    window.imgPokemonOponent.setAttribute('src',oponentPokemon.sprites.back_default)
}

init();