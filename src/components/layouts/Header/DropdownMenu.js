import { useState } from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';


const DropdownMenu = () => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
    }

    return (       
            <div className="bg-gray-200 flex justify-center items-center">
                <div className="relative inline-block text-left">
                    <div>
                        <button 
                            onClick={handleClick}
                            type="button" 
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
                            id="menu-button" 
                            aria-expanded="true" 
                            aria-haspopup="true"
                            >
                                <svg 
                                className="h-6 w-6 text-black" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                    <path strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                        </button>
                    </div>
                    {showOptions && (
                        <div 
                            className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" 
                            role="menu" 
                            aria-orientation="vertical" 
                            aria-labelledby="menu-button" 
                            tabIndex="-1"
                        >
                                <div className="py-1" role="none">
                                        <Link 
                                            to="/" 
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                                            role="menuitem" 
                                            tabIndex="-1" 
                                            id="menu-item-0"
                                        >
                                            About
                                        </Link>
                                        <Link 
                                            to="/pokemons" 
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                                            role="menuitem" 
                                            tabIndex="-1" 
                                            id="menu-item-1"
                                        >
                                            Pokemons
                                        </Link>
                                        <Link 
                                            to="/shoppingCart" 
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                                            role="menuitem" 
                                            tabIndex="-1" 
                                            id="menu-item-2"
                                        >
                                            Cart
                                        </Link>    
                                </div>
                        </div>
                    )}
                </div>
            </div>
    );
}
 
export default DropdownMenu;