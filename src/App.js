import Index from 'components/layouts/Index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PokemonsFetching from 'components/pages/PokemonsFetching';
import Contact from 'components/pages/Contact';
import NotFound from 'components/pages/NotFound';
import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer';
import ShoppingCart from 'components/pages/shoppingCart/ShoppingCart';

function App() {
  return (
      <Router>
          <ToastContainer autoClose={3000} />
          <Header />
          <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/pokemons' component={PokemonsFetching} />
              <Route path='/contact/:identifier/:identificador' component={Contact} />
              <Route path='/contact/' component={Contact} />
              <Route path='/shoppingCart' component={ShoppingCart} />
              <Route component={NotFound} />
          </Switch>
          <Footer />
      </Router>

  );
}

export default App;