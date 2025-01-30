# Itachi - powerful social media toolkit for those who need

## How to debug
- Create `web-ext.config.ts`

  ```typescript
  import { defineRunnerConfig } from 'wxt'

  export default defineRunnerConfig({
    binaries: {
      chrome: '/var/lib/flatpak/app/com.google.Chrome/current/active/export/bin/com.google.Chrome', // local google chrome executable file
      firefox: '/var/lib/flatpak/app/org.mozilla.firefox/current/active/export/bin/org.mozilla.firefox' // local firefox executable file
    },
  })
  ```

- Run `pnpm dev`

- Any change will be load automatically
