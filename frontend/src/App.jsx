import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'; // make sure this exists
import { useAuth } from './hooks/useAuth'; // adjust path if needed

function Home() {
  return (
    <div>
      <h1>Welcome to ChristeGlow</h1>
      <p>
        You are on the home page. Try <a href="/login">Login</a> or <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

function App() {
  const currentUser = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* ✅ Protected route */}
        <Route 
          path="/dashboard" 
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
