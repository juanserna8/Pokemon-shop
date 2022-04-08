import Index from 'components/layouts/Index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from 'components/pages/Projects';
import Contact from 'components/pages/Contact';

function App() {
  return (
    <Router>
      <Index />
      <Switch>
        <Route path='/' exact />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
