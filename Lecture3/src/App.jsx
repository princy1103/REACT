import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State from './components/state'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <State/>
  </StrictMode>,
)
