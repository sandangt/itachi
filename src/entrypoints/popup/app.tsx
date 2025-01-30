import { useState } from 'react'
import { TOGGLE_EVENT_ON, TOGGLE_EVENT_OFF } from '@/constants'
import { Button } from '@/components/ui/button'

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
      <Button variant="outline" onClick={onToggleBtn}
      >
        {isColor ? 'Reset Color' : 'Make Colorful'}
      </Button>
    </div>
  )
}
