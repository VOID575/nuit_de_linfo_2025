import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <a href="/" style={{ color: '#646cff', textDecoration: 'underline' }}>
        Retourner à l'accueil
      </a>
    </div>
  );
};

export default NotFound;