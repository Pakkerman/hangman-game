import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GameProvider } from './context/GameContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
