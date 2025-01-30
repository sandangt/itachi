import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  extensionApi: 'webextension-polyfill',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Itachi',
    description: 'This is itachi chrome extension',
    permissions: ['activeTab', 'scripting', 'storage'],
    action: {},
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
})
