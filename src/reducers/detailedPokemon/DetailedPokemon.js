import { useDispatch, useSelector } from "react-redux";
import { addPokemonToCart } from "reducers/shoppingCart/shoppingCartSlice";

export function DetailedPokemon() {
    const pokemonSelector = useSelector((state) => state.detailedPokemon);
    const dispatch = useDispatch();
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return(
        <div className="pb-4 pt-4 mx-auto w-3/4 border-2 border-blue-400 rounded md:w-1/2 lg:w-1/3 transition-transform duration-300 ease-out flex justify-center">
                {pokemonSelector.id === null && (
                    <div className="h-full details col-span-2 flex content-center font-bebas pl-2"> 
                        <p className="text-white text-center font-indie">Select a Pokemon</p>
                    </div>
                )}
                {pokemonSelector.id != null && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center content-center px-4">
                        <div className="details justify-items-center font-bebas ml-2 lg:pl-2">
                            <div className="flex items-end">
                                <p className="text-white font-bold text-lg">Name:</p>
                                <p className="text-white pl-1">{capitalizeFirstLetter(pokemonSelector.name)}</p>
                            </div>
                            <p className="text-white font-bold text-lg">Abilities: </p>
                            <ol className='list-decimal pl-6'>
                                {pokemonSelector.abilities[0] ? pokemonSelector.abilities.map((ability, index) => {
                                    return <li key={index} className="text-white">{capitalizeFirstLetter(ability.ability.name)}</li>
                                }) : 'undefined'}
                            </ol>
                            <div className="flex items-end">
                                <p className="text-white font-bold text-lg">Price: </p>
                                <p className="text-white pl-1"> ${pokemonSelector.weight}</p>
                            </div>
                            <div className="flex items-end">
                                <p className="text-white font-bold text-lg">Experience: </p>
                                <p className="text-white pl-1">{pokemonSelector.experience}</p>
                            </div>
                            <div className="flex items-end">
                                <p className="text-white font-bold text-lg">Height: </p>
                                <p className="text-white pl-1">{pokemonSelector.height}</p>
                            </div>
                        </div>
                            <div className="image h-[14rem] flex items-center ml-2 -mr-4">
                                <img src={pokemonSelector.imageUrl} className='h-[55%] md:h-[70%] p-2 animate-wiggle ' />
                            </div>
                            <button 
                                className="col-span-2 border-2 p-1 mb-4 rounded text-xs text-black font-semibold bg-orange-400 hover:scale-110"
                                onClick={() => {
                                    dispatch(addPokemonToCart({name: pokemonSelector.name, id: pokemonSelector.id, image: pokemonSelector.imageUrl, weight: pokemonSelector.weight}))
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                )}
        </div>
    )
}