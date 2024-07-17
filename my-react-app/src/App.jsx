import { useState } from 'react';
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home'; // Import Home component
import Projects from './components/Projects'; // Import Projects component
import './App.css';

function App() {
  // Assuming you might use useState later

  return (
    <Router>
      <div>
        <NavBar /> {/* Displaying NavBar on every page */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home page */}
          <Route path="/projects" element={<Projects />} /> {/* Route for Projects page */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
