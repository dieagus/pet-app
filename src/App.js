import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowsePage';
import PetsCheck from './PetsCheck';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/pets-check" element={<PetsCheck />} />
          {/* Placeholder routes for navigation links */}
          <Route path="/add-pet" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>Add Pet Page</h2><p>Coming Soon!</p></div>} />
          <Route path="/about" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>About Page</h2><p>Coming Soon!</p></div>} />
          <Route path="/contact" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>Contact Page</h2><p>Coming Soon!</p></div>} />
          <Route path="/pet/:id" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>Pet Details Page</h2><p>Coming Soon!</p></div>} />
          {/* Catch all route */}
          <Route path="*" element={<div style={{ padding: '2rem', textAlign: 'center' }}><h2>404 - Page Not Found</h2><p>The page you're looking for doesn't exist.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}
