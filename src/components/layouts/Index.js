import cover from 'assets/cover.jpg'
import pokemons from 'assets/pokemons.webp'
import { Link } from 'react-router-dom';

const Layout = () => {
    
    return (
        
        <div className='bg-black w-full min-h-screen'>
            <div className='w-full border-t-[1rem] border-black'>
                <img src={cover} className='object-cover h-48 w-full' />
            </div>
            <div className='lg:flex mx-10 mt-10'>
                <div className='lg:w-2/3 p-2'>
                    <p className='text-white text-justify text-md lg:text-lg'>This is a website where you can select all your favorite pokemons for your next battles. Go to "Pokemons" section or just click on the pokeball at the top of this page to see all available pokemons.
                    Also, head to the shopping cart section to check all the pokemons that you have chosen, and increase or decrease their quantity in case you want to modify it. </p>
                    <p className='text-white text-justify text-md lg:text-lg'>See which pokemons suit your budget and find the best team for you!</p>
                </div>
                <div className='mx-auto p-2 mt-10 lg:mt-0'>
                    <img src={pokemons} className='object-contain w-full h-48' />
                </div>
            </div>
            <div className='flex justify-center lg:block lg:mx-12 py-8 lg:-mt-4'>
                <Link to="/pokemons">
                    <button className='rounded text-lg text-white bg-green-600 py-2 px-10'>Go to shop</button>
                </Link>
            </div>
            {/*<div className='mt-16 flex justify-center'>
                <div className='w-2/3 md:w-1/3 -ml-6'>
                    <img src={cards} className="object-cover md:max-h-[18rem]" />
                </div>
                <p className='text-white mx-4 hidden md:contents'>Hello</p>
            </div>
            <p className='text-white text-center -ml-6 mt-4 md:hidden'>Hello</p>
            <div className="flex items-center justify-center mt-12">
                <div className='grid grid-cols-2 gap-10 max-w-xl mx-auto px-6 xl:px-0'>
                    <div className="rounded border-solid border-2 border-blue-400">
                        <img alt="profil" src={cards} className=" mx-auto object-fill"/>
                    </div>
                    <a href='https://pokeapi.co/' target='_blank' className="justify-center border-solid border-2 border-blue-400 rounded h-[20rem] overflow-hidden bg-gray-300">
                        <img className="object-top object-scale-down transition-all duration-1000 hover:object-bottom" alt="profil" src={page} />
                    </a>
                </div>
    </div>*/}
        </div>
    );
}
 
export default Layout;