import { createRoot } from 'react-dom/client'

import '@/assets/global.css'
import { EntryApp } from './app'

export default defineContentScript({
  matches: ['<all_urls>'],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        const root = createRoot(container)
        root.render(<EntryApp />)
        return root
      },
      onRemove: (root) => {
        if (root) root.unmount()
      },
    })

    // Call mount to add the UI to the DOM
    ui.mount()
  },
})
