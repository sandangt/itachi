import {
  DEFAULT_TOGGLED_BACKGROUND_COLOR,
  RESET_BACKGROUND_COLOR,
  TOGGLE_EVENT_ON,
} from '@/constants'
import type { Message } from '@/types'

export default defineBackground({
  main() {
    console.log('Hello World')
    // browser.runtime.onMessage.addListener(async (message: Message) => {
    //   console.log(message)
    // })
  },
})
