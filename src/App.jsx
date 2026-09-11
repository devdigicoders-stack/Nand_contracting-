import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ContractingConstruction from './pages/ContractingConstruction';
import FacilityMaintenance from './pages/FacilityMaintenance';
import HospitalityManpower from './pages/HospitalityManpower';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contracting-construction" element={<ContractingConstruction />} />
          <Route path="facility-maintenance" element={<FacilityMaintenance />} />
          <Route path="hospitality-manpower" element={<HospitalityManpower />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
