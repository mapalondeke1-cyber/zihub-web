import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  // 1. Mock Data for Zambia Innovation Hub Marketplace
  const [products] = useState([
    { id: 1, name: "Solar Irrigation Kit", category: "AgriTech", price: "K5,500", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Smart NRC Reader", category: "EdTech", price: "K1,200", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Zambian Art Piece", category: "Culture", price: "K850", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Coding Bootcamp Access", category: "EdTech", price: "K3,000", img: "https://via.placeholder.com/150" },
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#1a4a1a' }}>ZIHUB Marketplace</h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#666' }}>← Back to Hub</Link>
      </div>

      {/* Filter Bar */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {['All', 'AgriTech', 'EdTech', 'Culture'].map(cat => (
          <button key={cat} style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ddd', cursor: 'pointer' }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            backgroundColor: 'white', 
            borderRadius: '10px', 
            padding: '15px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img src={product.img} alt={product.name} style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{product.name}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>{product.category}</p>
            <p style={{ fontWeight: 'bold', color: '#2e7d32', fontSize: '1.2rem' }}>{product.price}</p>
            <button style={{ 
              width: '100%', 
              padding: '10px', 
              backgroundColor: '#1a4a1a', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              marginTop: '10px',
              cursor: 'pointer'
            }}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
