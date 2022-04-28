import avatar from 'assets/avatar.jpg';
import page from 'assets/page.jpeg';

const Layout = () => {
    const onMouseEnterHandler = () => {
        console.log('Hello');
    }
    
    return (
        <div className="bg-black w-full min-h-screen flex items-center justify-center">
            <div className='grid grid-cols-2 gap-10 max-w-xl mx-auto px-6 xl:px-0'>
                <div className="flex align-middle flex-col justify-center items-center bg-red-300">
                    <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-20 w-20 "/>
                </div>
                <a href='https://google.com' target='_blank' className="justify-center border-solid border-2 border-blue-400 rounded h-[20rem] overflow-hidden bg-gray-300">
                    <img className="object-top object-none transition-all duration-1000 w-auto hover:object-bottom" alt="profil" src={page} onMouseEnter={onMouseEnterHandler} />
                </a>
            </div>
        </div>
    );
}
 
export default Layout;