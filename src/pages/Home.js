import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    container: { fontFamily: "'Inter', sans-serif", color: '#2d3436', backgroundColor: '#fdfbf7', minHeight: '100vh' },
    nav: { display: 'flex', justifyContent: 'space-between', padding: '20px 5%', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
    logo: { fontSize: '24px', fontWeight: '800', color: '#1a4a1a', textDecoration: 'none' },
    hero: { padding: '80px 5%', textAlign: 'center', background: 'linear-gradient(rgba(26,74,26,0.05), rgba(255,255,255,0))' },
    title: { fontSize: '3.5rem', marginBottom: '20px', color: '#1a4a1a' },
    buttonPrimary: { padding: '12px 30px', backgroundColor: '#1a4a1a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', marginRight: '15px', transition: '0.3s' },
    buttonSecondary: { padding: '12px 30px', border: '2px solid #1a4a1a', color: '#1a4a1a', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>ZIHUB</Link>
        <div>
          {['Invest', 'EdTech', 'Marketplace'].map(item => (
            <Link key={item} to={`/${item.toLowerCase()}`} style={{ marginLeft: '25px', textDecoration: 'none', color: '#636e72', fontWeight: '500' }}>{item}</Link>
          ))}
          <Link to="/register" style={{ marginLeft: '25px', color: '#e67e22', fontWeight: 'bold', textDecoration: 'none' }}>Join Hub</Link>
        </div>
      </nav>

      <header style={styles.hero}>
        <h1 style={styles.title}>Empowering Zambia's Future</h1>
        <p style={{ fontSize: '1.2rem', color: '#636e72', maxWidth: '700px', margin: '0 auto 40px' }}>
          The all-in-one platform for Zambian Innovation, Culture, and Investment. 
          Bridging the gap between heritage and technology.
        </p>
        <div style={{ marginTop: '40px' }}>
          <Link to="/invest" style={styles.buttonPrimary}>Start Investing</Link>
          {/* This now correctly points to /culture */}
          <Link to="/culture" style={styles.buttonSecondary}>Explore Culture</Link>
        </div>
      </header>

      <section style={{ padding: '60px 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        <div style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#fff', border: '1px solid #eee' }}>
          <h3 style={{ color: '#1a4a1a' }}>Marketplace</h3>
          <p>Discover locally crafted products and trade with fellow Zambians.</p>
        </div>
        <div style={{ padding: '30px', borderRadius: '15px', backgroundColor: '#fff', border: '1px solid #eee' }}>
          <h3 style={{ color: '#1a4a1a' }}>Education</h3>
          <p>Access specialized courses tailored for the Zambian economic landscape.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
