import { ACTION_MESSAGE_SHOW_MODAL } from '@/constants'
import { Button } from '@/components/ui/button'

export const EntryApp = () => {
  const onToggleBtn = async () => {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      browser.runtime.sendMessage({
        tabId: tab.id,
        action: ACTION_MESSAGE_SHOW_MODAL,
      })
      console.log(`DEBUG: message: tabId: ${tab.id} & action: ${ACTION_MESSAGE_SHOW_MODAL} sent`)
    }
  }

  return (
    <div className="p-4 w-48 text-center">
      <Button variant="outline" onClick={onToggleBtn}>
        Click button
      </Button>
    </div>
  )
}
