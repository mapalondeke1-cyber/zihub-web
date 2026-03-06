import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Culture from './pages/Culture';

function App() {
  return (
    <Routes>
      {/* This shows the professional home screen you just sent me */}
      <Route path="/" element={<Home />} />
      
      {/* This shows the new high-end Cultural Gallery */}
      <Route path="/culture" element={<Culture />} />
      
      {/* Fallback for other links - you can add these pages later */}
      <Route path="/invest" element={<Home />} />
      <Route path="/marketplace" element={<Home />} />
    </Routes>
  );
}

export default App;
