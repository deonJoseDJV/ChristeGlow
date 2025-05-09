import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function Home() {
  return (
    <div>
      <h1>Welcome to ChristeGlow</h1>
      <p>
        You are on the home page. Try <a href="/login">Login</a> or <a href="/signup">Signup</a>
      </p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
