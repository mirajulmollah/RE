import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className="flex gap-6 justify-center flex-wrap p-5">
    <App  />
    
  </div>
</StrictMode>
)
