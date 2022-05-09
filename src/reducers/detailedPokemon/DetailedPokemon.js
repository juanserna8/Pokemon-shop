import { useSelector } from "react-redux";

export function DetailedPokemon() {
    const pokemonSelector = useSelector((state) => state.detailedPokemon);

    return(
        <div className="mx-auto grid md:grid-cols-2 border-2 border-blue-400 rounded w-1/2 lg:w-1/3 transition-transform duration-300 ease-out justify-items-center items-center hover:-translate-y-2">
            <div className="details col-span-1 justify-items-center font-bebas">
                <p className="text-white">Name: {pokemonSelector.name}</p>
                <p className="text-white">abilities: {pokemonSelector.abilities}</p>
                <p className="text-white">weight: {pokemonSelector.weight}</p>
                <p className="text-white">experience: {pokemonSelector.experience}</p>
                <p className="text-white">height: {pokemonSelector.height}</p>
            </div>
            <div className="image col-span-1 h-[16rem] flex items-center">
                <img src={pokemonSelector.imageUrl} className='h-[70%] p-2 animate-wiggle ' />
            </div>
        </div>
    )
}