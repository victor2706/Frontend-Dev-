import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Artworks from './pages/Artworks';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Obradetalhes from './pages/Obradetalhes';

function App() {
  return (
    <div> 
    <BrowserRouter>
    <Menu/> 
    <Routes>
    <Route path="/Artworks" element={<Artworks/>} />
    <Route path="/Obradetalhes" element={<Obradetalhes/>} />
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
