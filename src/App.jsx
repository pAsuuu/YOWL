import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import PagesArtist from './pages/PagesArtist';
import PagesAfter from './pages/PagesAfter';
import Profile from './pages/Profile';
import CGU from './pages/CGU';
import CGV from './pages/CGV';
import Confidentialite from './pages/conf';
import Login from './components/Login'; // Assurez-vous que le chemin est correct

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
          <Route path="/conf" element={<Confidentialite />} />
          <Route path="/login" element={<Login />} /> {/* Ligne ajoutée pour la route Login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
