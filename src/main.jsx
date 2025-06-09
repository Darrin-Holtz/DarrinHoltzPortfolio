// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from '@/components/ui/toaster' // <<< ADD THIS LINE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster /> {/* <<< ADD THIS LINE */}
  </StrictMode>,
)