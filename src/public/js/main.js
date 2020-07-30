


async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
}

/*  */
 function generarNumber(){
    let random = Math.random()*100+1;
    let number = Math.round(random);
    return number
}

async function createStats(){
    let divStats = document.createElement('div');
    let pointsLife = document.createElement('p');
     divStats.appendChild(pointsLife.createTextNode('PH'));
}

async function controls(){
    document.addEventListener("keydown", (event)=>{
         if (event.keyCode == 65){
            console.log(confirmar)
         } 
      });
}



async function init(){
    //await createStats()
    const firstPokemon = await getPokemon( generarNumber())
    const oponentPokemon = await getPokemon( generarNumber())
    await controls();

    window.pokemon.textContent = firstPokemon.name
    window.imgPokemon.setAttribute('src',firstPokemon.sprites.front_default)
    console.log(firstPokemon);

    window.oponentPokemon.textContent = oponentPokemon.name
    window.imgPokemonOponent.setAttribute('src',oponentPokemon.sprites.back_default)
}

init();