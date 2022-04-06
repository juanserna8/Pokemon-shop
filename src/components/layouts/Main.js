import avatar from 'assets/avatar.jpg'

const Main = () => {
    return (
        <div className="logo m-auto">
            <a href="#" className="block relative">
                <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
    );
}
 
export default Main;