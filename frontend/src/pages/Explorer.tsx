import React from 'react';
import './Explorer.css';

const Explorer: React.FC = () => {
  return (
    <div className="explorer-container">
      <h1>Explorer</h1>
      <p className="explorer-text">Explorez notre contenu et découvrez de nouvelles fonctionnalités.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Fonctionnalités disponibles :</h2>
        <ul>
          <li>Navigation interactive</li>
          <li>Contenu dynamique</li>
          <li>Interface moderne</li>
        </ul>
      </div>
    </div>
  );
};

export default Explorer;