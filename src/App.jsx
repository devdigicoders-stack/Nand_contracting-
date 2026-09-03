import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; // Contracting page
import Renovation from './pages/Renovation';
import Manpower from './pages/Manpower';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contracting" element={<Services />} />
          <Route path="services" element={<Services />} /> {/* Keep as alias/fallback */}
          <Route path="renovation-fitout" element={<Renovation />} />
          <Route path="renovation" element={<Renovation />} /> {/* Keep as alias/fallback */}
          <Route path="manpower-hospitality" element={<Manpower />} />
          <Route path="manpower" element={<Manpower />} /> {/* Keep as alias/fallback */}
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
