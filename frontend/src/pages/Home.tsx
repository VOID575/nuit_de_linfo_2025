import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <h1>Accueil</h1>
        <section className="hero">
          <h2>Ce document est classé top secret.</h2>
          <div className="section-NIRD">
            <p>L’opération NIRD est un processus visant à supprimer toute dépendance. Beaucoup d’entreprises sont impactés économiquement et écologiquement par les changements fait par les entreprises qui monopolise les logiciels informatique. Cliquez sur le bouton, nous ne pouvons pas en dire plus.</p>
            <a href="/oldpage/index.html" className="nav-link-in-page">En savoir plus sur le NIRD</a>
          </div>
        </section>
        <section className="hero">
          <h2>Explorer</h2>
          <div className="section-explorer">
            <p>L’opération NIRD vous a confié une mission : en savoir plus sur les différentes manières de garder un numérique libre, responsable et citoyen à l’intérieur de nos établissements scolaires. Commencez l’exploration dès maintenant. </p>
            <NavLink to="/Level1Intro" className="nav-link-in-page">Commencer l'exploration</NavLink>
          </div>
        </section >
      </div>
      <Footer />
    </div >
  );
};

export default Home;