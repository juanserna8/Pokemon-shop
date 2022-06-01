import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const [pokemons, setPokemons] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
    })

    //Extract the 'name' URL parameter 
    const { name } = useParams();
    console.log(name);
    
    async function getAllPokemons() {
        const res = await fetch(currentPageUrl)
        const data = await res.json() 
        console.log(data)

        createPokemonObject(data.results)
    }

    //Explicacion de esta funcion????
    function createPokemonObject(result) {
        result.forEach(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const singlePokemon = await res.json()
            console.log('hola', singlePokemon.name)

            setPokemons(
                function makeList(pokemonAcumulator){
                    return [...pokemonAcumulator, singlePokemon];
                }
            )
        })
    }

    useEffect(() => {
        getAllPokemons()
    }, [])


    return (
        <div className="mt-4 grid grid-cols-1 justify-items-center">
            <h1 className="text-4xl">Let's keep in touch</h1>
            <p>Need help with your business or project website? ... Let's talk!</p>
            <div className='search my-4 border-2 border-gray-600 rounded'>
                <input type="text" value={search} onChange={handleSearch} />
            </div>
            <ul>{filteredPokemons.map((pokemon, index) => {
                return <li key={index}>{pokemon.name}</li>
            })}
            </ul>
            <p className='text-black'>{name}</p>
        </div>
    );
}
 
export default Contact;