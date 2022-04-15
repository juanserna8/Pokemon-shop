import avatar from 'assets/avatar.jpg'

const Layout = () => {
    return (
        <div className="bg-black min-h-screen grid grid-cols-1">
            <div className="flex align-middle flex-col justify-center items-center">
                <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </div>
        </div>
    );
}
 
export default Layout;