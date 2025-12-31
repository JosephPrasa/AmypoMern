import './App.css';

import {BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Placements from './pages/Placement';
import Academics from './pages/Academics';
import { useState } from 'react';
import News from './practice/News';

function App() {
  const [category,setCategory ]=useState("general");
  return (
    <div className="App">
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/place">Placements</Link>
        <Link to="/admission">Admission</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admission" element={<Admission/>} />
        <Route path="place" element={<Placements/>} />
        <Route path="/academics" element ={<Academics/>}/>
      </Routes>

      </BrowserRouter>
      
      <h1>News Application</h1>
      <button onClick={()=>setCategory("general")}>General</button>
      <button onClick={()=>setCategory("Technology")}>Technology</button>
      <button onClick={()=>setCategory("Sports")}>Sports</button>
      <News category={category}/>
    </div>
  );
}

export default App;