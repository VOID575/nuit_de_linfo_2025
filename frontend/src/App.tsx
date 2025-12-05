import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Explorer from './pages/Explorer'
import NotFound from './pages/NotFound'
import Level3 from './pages/Level3'
import Level2 from "./pages/level2"
import Level1Intro from './pages/Level1Intro/Level1Intro'
import Level1Game from './pages/Level1Game/Level1Game'
import Level1End from './pages/Level1End/Level1End'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App