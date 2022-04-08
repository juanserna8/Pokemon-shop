import Main from 'components/layouts/Main';
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header/Header';


const Layout = () => {
    return (
        <div className="bg-black min-h-screen grid grid-cols-1">
            <Header className="" />
            <div className="flex h-screen">
                <Main />
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;
