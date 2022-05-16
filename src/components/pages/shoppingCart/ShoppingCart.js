import { useSelector } from "react-redux";

const ShoppingCart = () => {
    const cartSelector = useSelector((state) => state.shoppingCart)
    let cartArray = cartSelector.cart;

    console.log(cartSelector)

    return (
        <div className="bg-black flex justify-center">            
            {cartArray.length === 0 && (
                <h1 className="text-white text-2xl m-4">No pokemon selected</h1>
            )}
            {cartArray.length > 0 && (
                <ul className="grid grid-cols-1 gap-3 mt-4 w-2/3 md:w-1/2 mb-4">
                {cartArray.map(({id, name, image, weight}) => {
                    return <li key={id} className='border-solid border-2 border-blue-400 rounded'>
                        <div className="grid grid-cols-3 md:grid-cols-5 my-2 max-h-24">
                            <img src={image} className='h-24 w-16 mx-4' />
                            <div className="col-span-1 md:col-span-2 grid justify-items-center items-center pl-2">
                                <h2 className="text-white">Pokemon: {name}</h2>
                                <p className="text-white">${weight}</p>
                            </div>
                            <div className="md:col-start-5 flex flex-col justify-between items-end pr-2">
                                <button className="">
                                    <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                </button>
                                <p className="text-white text-xs">Qty: 2</p>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            )}
            

        </div>
    );
}
 
export default ShoppingCart;