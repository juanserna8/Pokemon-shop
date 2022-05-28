import { addPokemon } from "reducers/counter/currentPokemonSlice";
import { useDispatch } from "react-redux";
import { addDetailedPokemon } from "reducers/detailedPokemon/detailedPokemonSlice";
    
const PokemonCards = ({id, name, image, type, abilities, experience, weight, height}) => {
    const dispatch = useDispatch()
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <div className='border-solid border-2 border-blue-400 rounded overflow-hidden h-[15rem]' onClick={() => {
            dispatch(addPokemon({id, name, imageUrl: image}))
            dispatch(addDetailedPokemon({id, name, abilities, experience, weight, imageUrl: image, height}))
        }}>
            <div className="pl-2">
                <small className="text-white">#0{id}</small>
            </div>
            <img className="h-[70%] p-2 mx-auto" src={image} alt={name} />
            <div className="bg-orange-400 text-center">
                <h3 className="text-black font-semibold">{capitalizeFirstLetter(name)}</h3>
                <small className="text-black font-medium">Type: {capitalizeFirstLetter(type)}</small>
            </div>
        </div>
    );
}
 
export default PokemonCards;