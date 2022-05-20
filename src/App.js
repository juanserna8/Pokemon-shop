import Index from 'components/layouts/Index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Projects from 'components/pages/Projects';
import Contact from 'components/pages/Contact';
import NotFound from 'components/pages/NotFound';
import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer';
import ShoppingCart from 'components/pages/shoppingCart/ShoppingCart';

function App() {
  return (
      <Router>
          <ToastContainer />
          <Header />
          <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route path='/shoppingCart' component={ShoppingCart} />
              <Route component={NotFound} />
          </Switch>
          <Footer />
      </Router>

  );
}

export default App;