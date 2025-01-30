import { createRoot } from 'react-dom/client'

import { EntryApp } from './app'
import '@/assets/global.css'

export default defineContentScript({
  matches: ['<all_urls>'],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = createRoot(container)
        root.render(<EntryApp />)
        return root
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root.unmount()
      },
    })

    // Call mount to add the UI to the DOM
    ui.mount()
  },
})
