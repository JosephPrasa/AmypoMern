import './App.css';

import { Routes, Route, NavLink } from "react-router-dom";
import Posts from './components/Posts';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      
      {/* Navigation */}
      <nav className="nav">
        <NavLink to="/posts" className="nav-link">
          Posts
        </NavLink>

        <NavLink to="/comments" className="nav-link">
          Comments
        </NavLink>
      </nav>

      {/* Middle UI content */}
      <div className="content">
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;