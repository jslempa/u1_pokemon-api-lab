// const getPokemon = async () => {
//     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
//     //console.log(pokemon.data.results[0].name)
//     const pokemonName = pokemon.data.results
//     pokemonName.forEach(pokemon => {
//         console.log(`name: ${pokemon.name}`)
//     })
// } 
// getPokemon()



// we have an array of pkmn objcs 
// each object has a name a + url
// once we have a foreach we want to
// keep each pkmn name + url on screen 
// FOR EACH ** item in the array of objects we need to (pull a certain amnt)
        // create element 
        // div to store stuff
        // attribute of id or class to our element (to target them)
        // populate this data
    //create an html element(s) (div) to store two texts for name + url
    // document.createElement (?)
        // set an attribute to element (id or class)
    // append element (?)
    // populate newly created elements with our pulled object pkmn info

let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let pokemonStats = document.querySelector("#pokemonStats")
//where does this need to be scoped?
// let textInput = document.querySelector("#inputBar").value

button.addEventListener('click', async () => {
    // const pokemonName = namePokemon.data.results
    // let name = pokemonName.value
    let name = inputBar.value
    let response = await axios.get (`https://pokeapi.co/api/v2/pokemon/${name}`)
    let pokeData = response.data
    let pokeImage = document.querySelector("#pokemonImage")
    let imageUrl = pokeData.sprites.front_default

    let pokeStats = pokeData.stats
    console.log(pokeStats)

    pokeImage.setAttribute(`src`, imageUrl)
    pokemonName.innerText = name
}
)
    
 

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here




