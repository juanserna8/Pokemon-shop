import { useSelector } from "react-redux";

export function DetailedPokemon() {
    const pokemonSelector = useSelector((state) => state.detailedPokemon);

    return(
        <div className="mx-auto grid md:grid-cols-2 border-2 border-blue-400 rounded w-1/2 lg:w-1/3 transition-transform duration-300 ease-out justify-items-center items-center">
            <div className="details col-span-1 justify-items-center font-bebas">
                <p className="text-white">Name: {pokemonSelector.name}</p>
                <p className="text-white">abilities: </p>
                {pokemonSelector.abilities[0] ? pokemonSelector.abilities.map((ability, index) => {
                    return <p key={index} className="text-white">{ability.ability.name}</p>
                }) : 'undefined'}
                <p className="text-white">weight: {pokemonSelector.weight}</p>
                <p className="text-white">experience: {pokemonSelector.experience}</p>
                <p className="text-white">height: {pokemonSelector.height}</p>
            </div>
            <div className="image col-span-1 h-[16rem] flex items-center">
                <img src={pokemonSelector.imageUrl} className='h-[70%] p-2 animate-wiggle ' />
            </div>
            <button className="col-span-2 border-2 p-1 -mt-4 mb-4 rounded text-xs text-black font-semibold bg-orange-400 hover:scale-110">Add to cart</button>
        </div>
    )
}