import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Simple Home Component
const Home = () => (
  <div style={{ textAlign: 'center', padding: '100px', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
    <h1 style={{ color: '#1a4a1a', fontSize: '3rem' }}>Empowering Zambia's Future</h1>
    <Link to="/culture" style={{ padding: '12px 25px', backgroundColor: '#1a4a1a', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
      Explore Culture
    </Link>
  </div>
);

// Simple Culture Component
const Culture = () => (
  <div style={{ padding: '50px', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
    <Link to="/" style={{ color: '#636e72', textDecoration: 'none' }}>← Back</Link>
    <h1 style={{ color: '#1a4a1a' }}>Zambian Heritage</h1>
    <p>Welcome to the Culture Gallery.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/culture" element={<Culture />} />
    </Routes>
  );
}

export default App;
