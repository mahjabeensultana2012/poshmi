import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    // <div className="App">
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
