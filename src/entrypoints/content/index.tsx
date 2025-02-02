import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { EntryApp } from './app'
import '@/assets/global.css'

export default defineContentScript({
  matches: ['https://*.facebook.com/*', 'https://*.blank.org/*'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'itachi-modal',
      position: 'inline',
      anchor: `a[href="${document.URL.toString()}"][role="link"]`,
      append: 'after',
      onMount: (container) => {
        const wrapper = document.createElement('div')
        container.append(wrapper)
        const root = createRoot(wrapper)
        root.render(<App />)
        return { root, wrapper }
      },
      // onRemove: (elements) => {
      //   elements?.root.unmount()
      //   elements?.wrapper.remove()
      // },
    })
    ui.autoMount()
  },
})

const App = () => (
  <StrictMode>
    <EntryApp />
  </StrictMode>
)
