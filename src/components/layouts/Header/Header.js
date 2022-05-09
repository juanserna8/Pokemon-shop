import logo from 'assets/logo.png';
import DropdownMenu from 'components/layouts/Header/DropdownMenu';
import { Counter } from 'reducers/counter/Counter';
import { useSelector } from "react-redux";

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
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a className="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                        Home
                                    </a>
                                    <a className="text-gray-500 dark:text-white  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                        Gallery
                                    </a>
                                    <a className="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                        Content
                                    </a>
                                    <a className="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;