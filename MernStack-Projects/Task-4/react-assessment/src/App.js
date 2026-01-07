import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import AppNavbar from './components/AppNavbar';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const { isLoggedIn, user, login, logout } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <AppNavbar
        isLoggedIn={isLoggedIn}
        user={user}
        login={login}
        logout={logout}
      />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <DashboardLayout user={user} />
            </ProtectedRoute>
          }
        >
          {/* Nested routes */}
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="settings" element={<Settings user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;