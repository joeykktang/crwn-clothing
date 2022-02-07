import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Route exact path="/" component={Homepage} />
    <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
