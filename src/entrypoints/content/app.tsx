import { useState, useEffect } from 'react'

import { Modal } from './components/modal'
import { Button } from '@/components/ui/button'

export const EntryApp = () => {
  const [showModal, setShowModal] = useState(false)
  // useEffect(() => {
  //   const handleMessage = (message: Message) => {
  //     if (message.action === ACTION_MESSAGE_SHOW_MODAL) {
  //       setShowModal(true)
  //     }
  //   }
  //   console.log('HELLO WORLD')
  //   browser.runtime.onMessage.addListener(handleMessage)
  //   return () => {
  //     browser.runtime.onMessage.removeListener(handleMessage)
  //   }
  // }, [])
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
    </div>
  )
}
