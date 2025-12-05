import './App.css'
import NavBar from './components/NavBar/NavBar'
import FillInTheBlanks from './components/Game/FillInTheBlanks'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <FillInTheBlanks />
      </main>
    </div>
  )
}

export default App