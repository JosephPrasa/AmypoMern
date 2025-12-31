import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Placements from './pages/Placement';
import Academics from './pages/Academics';
import { useState } from 'react';
import News from './components/News';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <h2 className="logo">News Mania</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/academics">Arictcle</Link>
            <Link to="/place">Source</Link>
            <Link to="/admission">Get Started</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/place" element={<Placements />} />
          <Route path="/academics" element={<Academics />} />
        </Routes>
      </BrowserRouter>

      <section className="news-section">
        <h1>📰 News Application</h1>

        <div className="category-buttons">
          <button onClick={() => setCategory("general")}>General</button>
          <button onClick={() => setCategory("technology")}>Technology</button>
          <button onClick={() => setCategory("sports")}>Sports</button>
        </div>

        <News category={category} />
      </section>
    </div>
  );
}

export default App;
