import {BrowserRouter , Link , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Portfolio from './pages/Portfolio';
import Products from './pages/Products';
import Service from './pages/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/client">Clients</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/products">Products</Link>
        <Link to="/service">Service</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/client" element={<Clients/>}/>
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/service" element ={<Service/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
