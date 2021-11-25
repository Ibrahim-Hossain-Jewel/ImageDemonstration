import React from 'react';
import HomePage from './page/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}
export default App;