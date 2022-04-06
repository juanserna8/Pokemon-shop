import logo from 'assets/logo.png';
import DropdownMenu from 'components/layouts/Header/DropdownMenu';

const Header = () => {
    return (
        <div className=''>
            <nav className="header bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <DropdownMenu />
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
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Home
                        </a>
                        <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Gallery
                        </a>
                        <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Content
                        </a>
                        <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;