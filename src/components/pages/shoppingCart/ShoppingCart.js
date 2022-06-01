import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonToCart, clearCart, decreaseItemQuantity, getTotals, removePokemon } from "reducers/shoppingCart/shoppingCartSlice";

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cartSelector = useSelector((state) => state.shoppingCart)
    let cartArray = cartSelector.cart;
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cartSelector, dispatch])

    return (
        <div className="bg-black py-6">
            <div className="flex justify-center">            
                {cartArray.length === 0 && (
                    <h1 className="text-white text-2xl m-4 text-center">Your cart is currently empty ... No pokemon has been selected yet</h1>
                )}
                {cartArray.length > 0 && (
                    <ul className="grid grid-cols-1 gap-3 mt-4 w-2/3 md:w-1/2 mb-4">
                    {cartArray.map(({id, name, image, weight, cartQuantity}) => {
                        return <li key={id} className='border-solid border-2 border-blue-400 rounded'>
                            <div className="grid grid-cols-3 md:grid-cols-5 my-2 max-h-24">
                                <img src={image} className='h-24 w-16 mx-4' />
                                <div className="col-span-1 md:col-span-3 grid justify-items-center items-center pl-2">
                                    <h2 className="text-white lg:text-2xl">Pokemon: {capitalizeFirstLetter(name)}</h2>
                                    <p className="text-white text-xl">${weight * cartQuantity}</p>
                                </div>
                                <div className="md:col-start-5 flex flex-col justify-between items-end pr-2">
                                    {/* {<button onClick={(cartSelector) => {
                                        dispatch(removePokemon({id: cartSelector.id}))
                                        console.log(id)
                                        }}>} */}
                                        {/* {<button onClick={() => {
                                        dispatch(removePokemon({id: id}))
                                        console.log(id)
                                        }}>} */}
                                    <button 
                                        onClick={() => {
                                            dispatch(removePokemon({id}))
                                            console.log(id)
                                        }}
                                        className='pr-3'
                                        >
                                        <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                    </button>
                                    <p className="text-white text-xs mt-3 pr-3 font-bold">Qty:</p>
                                    <div className="nums-container flex flex-row items-center border border-white rounded">
                                        <button 
                                            className="text-white px-1"
                                            onClick={() => {
                                                dispatch(decreaseItemQuantity({id, name}))
                                            }}
                                        >-</button>
                                        <p className="text-white text-xs px-2">{cartQuantity}</p>
                                        <button 
                                            className="text-white px-1"
                                            onClick={() => {
                                                dispatch(addPokemonToCart({id, name}))
                                            }}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
                )}
            </div>
            {cartArray.length > 0 && (
                <div className="flex justify-around w-2/3 mx-auto">
                    <button 
                        onClick={() => {
                            dispatch(clearCart())
                        }}
                        className="text-white border-2 border-white rounded mb-4 p-2 hover:bg-gray-500"
                    >
                        Clear cart
                    </button>
                    <div className="flex">
                        <h1 className="text-white font-bold -mr-2">Subtotal:</h1>
                        <p className="text-white pl-3 -mr-2">${cartSelector.cartTotalAmount}</p>
                    </div>
            </div>
            )}
        </div>
    );
}
 
export default ShoppingCart;