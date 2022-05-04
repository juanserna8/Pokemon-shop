import { addPokemon } from "reducers/counter/currentPokemonSlice";
import { useDispatch } from "react-redux";

const PokemonProjects = ({id, name, image, type}) => {
    //() => console.log({id, name, imageUrl: image})
    const dispatch = useDispatch()

    return (
        <div className='border-solid border-2 border-blue-400 rounded overflow-hidden h-[15rem]' onClick={() => dispatch(addPokemon({id, name, imageUrl: image}))}>
            <div>
                <small className="text-white">#0{id}</small>
            </div>
            <img className="h-[70%] p-2" src={image} alt={name} />
            <div className="bg-orange-400">
                <h3 className="text-black font-semibold">{name}</h3>
                <small className="text-black font-medium">Type: {type}</small>
            </div>
        </div>
    );
}
 
export default PokemonProjects;