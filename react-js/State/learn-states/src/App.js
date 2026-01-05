import { useState } from 'react';
import './App.css';
import CardSummary from './components/CardSummary';
import Product from './components/Product';
import NavBar from './components/NavBar';

function App() {

  // create a state

  const [cart,setCart]=useState([]);
  return (
    <div className="App">
      <NavBar cartCount={cart.length}/>
      <Product cart={cart} setCart={setCart}/>
      <CardSummary cart={cart}/>
    </div>
  );
}

export default App;
