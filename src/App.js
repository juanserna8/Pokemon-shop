import Index from 'components/layouts/Index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PokemonsFetching from 'components/pages/PokemonsFetching';
import NotFound from 'components/pages/NotFound';
import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer';
import ShoppingCart from 'components/pages/shoppingCart/ShoppingCart';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
      <Router>
        <HashRouter basename='/'>
            <ToastContainer autoClose={3000} />
            <Header />
            <Switch>
                <Route path='/' exact component={Index} />
                <Route path='/pokemons' component={PokemonsFetching} />
                <Route path='/shoppingCart' component={ShoppingCart} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </HashRouter>
      </Router>

  );
}

export default App;