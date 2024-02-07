import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import PagesArtist from './pages/PagesArtist'; // Première importation correcte
import PagesAfter from './pages/PagesAfter'; // Correction: Renommer l'importation pour éviter le conflit

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagesartist" element={<PagesArtist />} />
          <Route path="/pagesafter" element={<PagesAfter />} /> {/* Correction appliquée ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
