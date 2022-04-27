import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Artworks from './pages/Artworks';
import Obradearte from './pages/Obradearte';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Obradetalhes from './pages/Obradetalhes';

function App() {
  return (
    <div> 
    <BrowserRouter>
    <Menu/> 
    <Routes>
    <Route path="/Artworks" element={<Artworks/>} />
    <Route path="/Obradearte" element={<Obradearte/>} />
    <Route path="/Obradetalhes" element={<Obradetalhes/>} />
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
