import { useEffect, useState, useRef } from 'react';
import PokemonCards from 'components/pages/PokemonCards.js';
import { DetailedPokemon } from 'reducers/detailedPokemon/DetailedPokemon';

const PokemonsFetching = () => {   
    const targetRef = useRef(null);
    const [allPokemons, setAllPokemons] = useState([]);
    const [search, setSearch] = useState('');

    let loadMore = 'https://pokeapi.co/api/v2/pokemon?limit=20'

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    //Function that filters pokemons
    const filteredPokemons = allPokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
    })

    //Fetch the pokemons
    async function getAllPokemons(){
        const res = await fetch(loadMore)
        const data = await res.json();
        //console.log(data, res);

        loadMore = data.next //setLoadMore(data.next)
        //console.log(loadMore, data.next)
        
        createPokemonObject(data.results)
    }
    
    //Create single pokemons
    function createPokemonObject (result) {
        result.forEach(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const singlePokemon = await res.json()
            //console.log(singlePokemon)

            setAllPokemons(
                function makeList(pokemonAcumulator){
                    return [...pokemonAcumulator, singlePokemon];
                }
            ) 
        })
    }

    //Infinite scroll
    function observerSetUp() {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if(entry.isIntersecting) {
                getAllPokemons()
            }
        })
        observer.observe(targetRef.current)
    }

    useEffect(() => {
        observerSetUp()
    }, []);
    
    return (
        <div className="bg-black py-6">
            <DetailedPokemon />
            <h1 className='text-center pt-10  text-yellow-400 text-4xl font-bold flex items-center justify-center'>AVAILABLE POKEMONS</h1>
                <div className='min-h-screen pt-6'>
                    <input 
                        type="text" 
                        className='mx-auto max-w-2/3 flex myt-4 mb-8 text-center border-2 border-gray-200 rounded' 
                        placeholder='Search pokemon'
                        onChange={handleSearch}
                    />
                        <div className="pokemon-container">
                            <div className="all-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-3xl mx-auto px-6 xl:px-0">
                                {filteredPokemons.map((pokemon, index) =>
                                    <PokemonCards 
                                        key={index}
                                        id={pokemon.id}
                                        name={pokemon.name}
                                        image={pokemon.sprites.other.dream_world.front_default}
                                        type={pokemon.types[0].type.name}
                                        abilities={pokemon.abilities}
                                        experience={pokemon.base_experience}
                                        weight={pokemon.weight}
                                        height={pokemon.height}
                                    />
                                )}
                            </div>
                            <div className='mt-4 flex items-center justify-center'>
                                <button 
                                    className="rounded p-2 border-solid border-2 border-slate-500 text-white" 
                                    onClick={() => getAllPokemons()}
                                    ref={targetRef}
                                >
                                    Load more
                                </button>
                            </div>
                        </div>
                </div>
        </div>
    );
}
 
export default PokemonsFetching;