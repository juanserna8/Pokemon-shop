import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [pokemon, setPokemon] = useState({name: 'latias', image:'https://heraldjournalism.com/wp-content/uploads/2020/07/347-3471090_latias-png-pokemon-latias-png.jpg'}); 
    


    //Extract the 'name' URL parameter 
    const { identifier } = useParams();
    
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

    useEffect(async() => {
        const fetching = await fetch('https://pokeapi.co/api/v2/pokemon/'+identifier)
        const data = await fetching.json();
        console.log(data)
        getAllPokemons()
        setPokemon({name: data.name, image: data.sprites.other.dream_world.front_default})
    }, [])


    return (
        <div className="mt-4 grid grid-cols-1 justify-items-center">
            <h1 className="text-4xl">Let's keep in touch</h1>
            <p>Need help with your business or project website? ... Let's talk!</p>
            <div>
                <p className='text-black'>{pokemon.name}</p>
                <img src={pokemon.image}/>
            </div>
        </div>
    );
}
 
export default Contact;