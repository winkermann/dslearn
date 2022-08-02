import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/catalog">
        <Catalog />
      </Route>
      <Route exact path="/catalog">
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
