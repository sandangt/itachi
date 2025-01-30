import { defineRunnerConfig } from 'wxt'

export default defineRunnerConfig({
  binaries: {
    chrome: '/var/lib/flatpak/app/com.google.Chrome/current/active/export/bin/com.google.Chrome', // google chrome executable file
    firefox: '/var/lib/flatpak/app/org.mozilla.firefox/current/active/export/bin/org.mozilla.firefox' // firefox executable file
  },
})
