import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { EntryApp } from './app'
import '@/assets/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EntryApp />
  </StrictMode>,
)
