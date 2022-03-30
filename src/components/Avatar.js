import avatar from '../assets/avatar.jpg'

const Avatar = () => {
    return (
        <div className="logo">
            <a href="#" className="block relative">
                <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
    );
}
 
export default Avatar;