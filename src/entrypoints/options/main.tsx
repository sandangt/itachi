import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/global.css'

import { EntryApp } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EntryApp />
  </StrictMode>,
)
