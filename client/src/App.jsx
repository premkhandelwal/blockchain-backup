import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Logs from './components/Logs/Logs'
import { EthProvider } from './contexts/EthContext'
import "./App.css"
function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logs" element={<Logs />} />
            </Routes>
        </div>
      </div>
    </EthProvider>
  )
}

export default App
