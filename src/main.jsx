import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Navbar />
  </StrictMode>,
)
