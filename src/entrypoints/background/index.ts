import { DEFAULT_TOGGLED_BACKGROUND_COLOR, RESET_BACKGROUND_COLOR, TOGGLE_EVENT_ON } from '@/constants'

export default defineBackground({
  main() {
    browser.runtime.onMessage.addListener(async ({ action, tabId }) => {
      if (tabId) {
        let color = RESET_BACKGROUND_COLOR
        if (action === TOGGLE_EVENT_ON) {
          const storage = await browser.storage.sync.get('preferredColor')
          color = storage?.preferredColor || DEFAULT_TOGGLED_BACKGROUND_COLOR
        }
        browser.scripting.executeScript({
          target: { tabId: tabId },
          func: (color) => {
            document.body.style.backgroundColor = color
          },
          args: [color],
        })
      }
    })
  },
})
