import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Explorer from './pages/Explorer'
import NotFound from './pages/NotFound'
import Game from './components/Game'
import {Button} from "./components/ui/button.tsx";
import Level3 from './pages/Level3'
import Level2 from "./pages/level2"
import Level1Intro from './pages/Level1Intro/Level1Intro'
import Level1Game from './pages/Level1Game/Level1Game'
import Level1End from './pages/Level1End/Level1End'

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
            <Route path="/level3" element={<Level3 />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/level1intro" element={<Level1Intro />} />
            <Route path="/level1game" element={<Level1Game />} />
            <Route path="/level1end" element={<Level1End />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
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
