import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Explorer from './pages/Explorer'
import NotFound from './pages/NotFound'
import Game from './components/Game'
import {Button} from "./components/ui/button.tsx";

function App() {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  useEffect(() => {
    const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','a','b'];
    const buffer: string[] = [];

    const handler = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      buffer.push(key);
      if (buffer.length > konami.length) buffer.shift();
      if (buffer.length === konami.length && buffer.every((k, i) => k === konami[i])) {
        setKonamiUnlocked(true);
      }

      // close with Escape
      if (e.key === 'Escape') setKonamiUnlocked(false);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
      <Router>
    {!konamiUnlocked ? (
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>

        ) : (
          <div className="flex flex-row justify-center top-16 right-8 z-50 pointer-events-none">
            <div>
                <Button
                    onClick={() => setKonamiUnlocked(false)}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-lg px-8"
                >
                    Menu Principal
                </Button>
              <Game modal={true} />
            </div>
          </div>
        )}
      </Router>
    );
}

export default App
