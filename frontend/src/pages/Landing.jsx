import React from 'react';

function Landing() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to Republic of Cybertania</h1>
      <p>Your gateway to secure e-Governance services</p>
      <button
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Redirecting to Login Page...')}
      >
        Login
      </button>
    </div>
  );
}

export default Landing;
