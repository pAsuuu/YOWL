import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import PagesArtist from './pages/PagesArtist';
import PagesAfter from './pages/PagesAfter';
import Profile from './pages/Profile'; 
import CGU from './pages/cgu'; 
import CGV from './pages/cgv'; 
import Confidentialite from './pages/conf'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagesartist" element={<PagesArtist />} />
          <Route path="/pagesafter" element={<PagesAfter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cgu" element={<CGU />} /> 
          <Route path="/cgv" element={<CGV />} /> 
          <Route path="/confidentialite" element={<conf/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
