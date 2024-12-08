import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';  // composant Dashboard
import Checklist from './Checklist';  // composant Checklist
import Formulaire from './Formulaire'; //  composant Formulaire
import './App.css';  //  fichier CSS global

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route pour la page Dashboard */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Route pour la page Checklist */}
        <Route path="/checklist/:id" element={<Checklist />} />
        
        {/* Route pour le formulaire */}
        <Route path="/formulaire" element={<Formulaire />} />
      </Routes>
    </Router>
  );
};

export default App;

