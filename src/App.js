import Avatar from './components/Avatar';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="container mx-auto my-1 bg-slate-100">
        <Header className="grid grid-cols-3" />
        <br /><br /><br /><br /><br />
        <Avatar className="grid grid-cols-1" />
        <br /><br /><br /><br />
        <Footer />
    </div>
  );
}

export default App;
