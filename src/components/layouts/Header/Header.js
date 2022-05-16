import logo from 'assets/logo.png';
import DropdownMenu from 'components/layouts/Header/DropdownMenu';
import { Counter } from 'reducers/counter/Counter';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const LinkButton = () => {
    return (
        <button>
            <svg className="h-8 w-8 text-gray-500 hover:text-gray-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
        </button>
    )
} 

const Header = () => {
    const count = useSelector((state) => state.counter.value)
    const currentPokemon = useSelector((state) => state.currentPokemon)

    return (
        <div className=''>
            <nav className="header bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <DropdownMenu />
                            <Counter />
                            <p>{count}</p>
                            {/*<p>Name: {currentPokemon.name}, id: #{currentPokemon.id}</p>*/}
                            <a className="flex-shrink-0" href="/">
                                <img className="h-14 w-18" src={logo} alt="Web-dev"/>
                            </a>
                            <Link to="/shoppingCart">
                                <LinkButton></LinkButton> 
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;