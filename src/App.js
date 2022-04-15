import Index from 'components/layouts/Index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from 'components/pages/Projects';
import Contact from 'components/pages/Contact';
import NotFound from 'components/pages/NotFound';
import Header from 'components/layouts/Header/Header';
import Footer from 'components/layouts/Footer';

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
          </Switch>
          <Footer />
      </Router>

  );
}

export default App;