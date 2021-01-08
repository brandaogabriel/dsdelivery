import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Orders from './Orders';
import Footer from './Footer';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;