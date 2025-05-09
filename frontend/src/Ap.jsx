import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import Zion from './pages/Zion';
import Camera from './pages/Camera';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/community' element={<Community />} />
        <Route path='/zion' element={<Zion />} />
        <Route path='/camera' element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;