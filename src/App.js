import React from 'react';
import HomePage from './page/homepage.component';
import ShopPage from './page/shop/shop.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return(
    <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/shop' component = {ShopPage} />
    </Switch>
  );
}
export default App;