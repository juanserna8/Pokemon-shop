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

    const filteredPokemons = allPokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
    })

    async function getAllPokemons(){
        const res = await fetch(loadMore)
        const data = await res.json();
        console.log(data, res);

        loadMore = data.next
        //setLoadMore(data.next)
        console.log(loadMore, data.next)
        
        createPokemonObject(data.results)
    }
    
    function createPokemonObject (result) {
        result.forEach(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const singlePokemon = await res.json()
            console.log(singlePokemon)

            setAllPokemons(
                function makeList(pokemonAcumulator){
                    return [...pokemonAcumulator, singlePokemon];
                }
            ) 
        })
    }

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

    // const images = [
    //     {id: 1, src: 'https://media.istockphoto.com/photos/web-development-and-web-design-concept-in-dark-blue-background-for-picture-id1291971619?b=1&k=20&m=1291971619&s=170667a&w=0&h=QHnZ92KhqdYO6zj0_dC_RWSsCJo1n_gaQ9XK0kHd7x0=', title: 'img1'},
    //     {id: 2, src: 'https://www.lauyan.com/en/_media/img/medium/responsive-showcase-presentation-house4sale.jpg', title: 'img2'},
    //     {id: 3, src: 'https://cdn.dribbble.com/users/2151039/screenshots/14664792/media/e861f954a94b7c30c9fa90032ab652d1.jpg?compress=1&resize=400x300&vertical=top', title: 'img3'},
    //     {id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHdsq49GOzxKH5fUziy6xI4RsjdgaIS6GAQ&usqp=CAU', title: 'img4'},
    //     {id: 5, src: 'https://assets.awwwards.com/awards/submissions/2016/06/575a73adbc8e2.jpg', title: 'img5'}
    // ]; 
    
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