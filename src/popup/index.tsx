import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/global.css'
import { HelloWorld } from '@/components/hello'

export const Popup = () => {
  return (
    <div className="text-5xl p-10 font-extrabold">
      <div>This is your popup.</div>
      <HelloWorld/>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-white w-[600px] h-[500px]">
      <Popup />
    </div>
  </StrictMode>,
)
