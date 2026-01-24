import { useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const API = "http://localhost:4000";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [token, setToken] = useState(localStorage.getItem("token"));

  const GOOGLE_CLIENT_ID = "25994112428-up4hqpfn3399qbrfqqc85t41471b6rpp.apps.googleusercontent.com";

  const register = async () => {
    try {
      await axios.post(`${API}/register`, form);
      alert("Registered successfully");
      setIsLogin(true);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, {
        email: form.email,
        password: form.password
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const googleLogin = async (credentialResponse) => {
    try {
      // ✅ credentialResponse.credential = Google ID Token (id_token)
      const res = await axios.post(`${API}/auth/google`, {
        id_token: credentialResponse.credential,
      });
      // ✅ Save JWT returned by backend
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Google Sign-In failed");
    }
  };
  if (token) {
    return (
      <div>
        <h2>Welcome! You are logged in</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <input
            placeholder="Name"
            onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
          />
        )}

        <input
          placeholder="Email"
          onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm(prev => ({ ...prev, password: e.target.value }))}
        />

        {isLogin ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={register}>Register</button>
        )}
        <p>OR</p>
        <GoogleLogin
          onSuccess={googleLogin}
          onError={() => alert("Google Login Failed")}
        />

        <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
          {isLogin ? "Create Account" : "Already have account? Login"}
        </p>
      </div>
    </GoogleOAuthProvider>
  )

}
export default App;
