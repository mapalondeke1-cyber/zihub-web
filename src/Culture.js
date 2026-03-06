import React from 'react';
import { Link } from 'react-router-dom';

const Culture = () => {
  const heritageSites = [
    {
      id: 1,
      title: "Victoria Falls",
      subtitle: "Mosi-oa-Tunya",
      desc: "Experience the 'Smoke that Thunders', one of the Seven Natural Wonders of the World.",
      img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800",
      color: "#e67e22"
    },
    {
      id: 2,
      title: "Kuomboka Ceremony",
      subtitle: "Lozi Tradition",
      desc: "The historic transition of the Litunga from the floodplains to higher ground.",
      img: "https://images.unsplash.com/photo-1523805081446-ee6a78e9f754?auto=format&fit=crop&w=800",
      color: "#1a4a1a"
    },
    {
      id: 3,
      title: "Zambian Artistry",
      subtitle: "Craft & Soul",
      desc: "Explore the intricate patterns of traditional basketry and copper craftsmanship.",
      img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800",
      color: "#d4af37"
    }
  ];

  return (
    <div style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', padding: '40px 5%' }}>
      {/* Header */}
      <div style={{ marginBottom: '60px', textAlign: 'left' }}>
        <Link to="/" style={{ color: '#636e72', textDecoration: 'none', fontWeight: '600' }}>← Return to Hub</Link>
        <h1 style={{ fontSize: '3rem', color: '#1a4a1a', marginTop: '20px', fontWeight: '800' }}>Explore Heritage</h1>
        <p style={{ color: '#636e72', fontSize: '1.2rem', maxWidth: '600px' }}>
          A digital journey through the landscapes, traditions, and soul of Zambia.
        </p>
      </div>

      {/* Heritage Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '40px' 
      }}>
        {heritageSites.map(site => (
          <div key={site.id} style={{ 
            backgroundColor: '#fff', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ height: '250px', overflow: 'hidden' }}>
              <img src={site.img} alt={site.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '30px' }}>
              <span style={{ color: site.color, fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>{site.subtitle}</span>
              <h3 style={{ margin: '10px 0', fontSize: '1.8rem', color: '#2d3436' }}>{site.title}</h3>
              <p style={{ color: '#636e72', lineHeight: '1.6', marginBottom: '20px' }}>{site.desc}</p>
              <button style={{ 
                backgroundColor: site.color, 
                color: 'white', 
                border: 'none', 
                padding: '12px 25px', 
                borderRadius: '10px', 
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                View Story
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
