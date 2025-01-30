import { useState } from 'react'
import { TOGGLE_EVENT_ON, TOGGLE_EVENT_OFF } from '@/constants'

export const EntryApp = () => {
  const [isColor, setIsColor] = useState(false)

  const onToggleBtn = async () => {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      browser.runtime.sendMessage({
        tabId: tab.id,
        action: !isColor ? TOGGLE_EVENT_ON : TOGGLE_EVENT_OFF,
      })
      setIsColor(!isColor)
    }
  }

  return (
    <div className="p-4 w-48 text-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onToggleBtn}
      >
        {isColor ? 'Reset Color' : 'Make Orange'}
      </button>
    </div>
  )
}
