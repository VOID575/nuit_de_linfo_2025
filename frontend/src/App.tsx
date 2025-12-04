import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <h1>Bienvenue sur notre site</h1>
        <p>Contenu principal de la page</p>
      </main>
    </div>
  )
}

export default App