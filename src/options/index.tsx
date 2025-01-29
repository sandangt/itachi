import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/global.css'
import { HelloWorld } from '@/components/hello'

const Options = () => {
  return (
    <div className="text-5xl p-10 font-extrabold">
      <div>This is your options page.</div>
      <HelloWorld />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-white w-full h-[1000px]">
      <Options />
    </div>
  </StrictMode>,
)
