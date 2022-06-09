import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [pokemon, setPokemon] = useState({name: 'latias', image:'https://heraldjournalism.com/wp-content/uploads/2020/07/347-3471090_latias-png-pokemon-latias-png.jpg'});
    const [pokemon2, setPokemon2] = useState({name: 'latias', image:'https://heraldjournalism.com/wp-content/uploads/2020/07/347-3471090_latias-png-pokemon-latias-png.jpg'}) 
    


    //Extract the 'name' URL parameter 
    const { identifier, identificador } = useParams();
    
    //Fetching all the pokemons
    async function getAllPokemons() {
        const res = await fetch(currentPageUrl)
        const data = await res.json() 
        console.log(data)

        createPokemonObject(data.results)
    }

    //Creating single pokemons
    function createPokemonObject(result) {
        result.forEach(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const singlePokemon = await res.json()

            setPokemons(
                function makeList(pokemonAcumulator){
                    return [...pokemonAcumulator, singlePokemon];
                }
            )
        })
    }

    async function getPokemon(id) {
        const fetching = await fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        const data = await fetching.json();
        return data;
        // console.log(data)
        // setPokemon({name: data.name, image: data.sprites.other.dream_world.front_default})
        // setPokemon2({name: data.name, image: data.sprites.other.dream_world.front_default})
        // console.log(pokemon, pokemon2)
    }

    async function getAndSetPokemon() {
        let callPokemon1 = await getPokemon(identifier)
        let callPokemon2 = await getPokemon(identificador)
        setPokemon({name: callPokemon1.name, image: callPokemon1.sprites.other.dream_world.front_default})
        setPokemon2({name: callPokemon2.name, image: callPokemon2.sprites.other.dream_world.front_default})
    }
    
    useEffect(async() => {
        getAndSetPokemon()

    }, [])


    return (
        <div className="mt-4 grid grid-cols-1 justify-items-center">
            <h1 className="text-4xl">Let's keep in touch</h1>
            <p>Need help with your business or project website? ... Let's talk!</p>
            <div>
                <p className='text-black'>{pokemon.name}</p>
                <img src={pokemon.image}/>
                <p className='text-black'>{pokemon2.name}</p>
                <img src={pokemon2.image}/>
            </div>
        </div>
    );
}
 
export default Contact;