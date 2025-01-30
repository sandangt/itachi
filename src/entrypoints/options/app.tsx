import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { DEFAULT_TOGGLED_BACKGROUND_COLOR } from '@/constants'

export const EntryApp = () => {
  const [color, setColor] = useState(DEFAULT_TOGGLED_BACKGROUND_COLOR)
  useEffect(() => {
    browser.storage.sync.get('preferredColor', (data) => {
      if (data.preferredColor) {
        setColor(data.preferredColor)
      }
    })
  }, [])
  const saveColor = () => {
    browser.storage.sync.set({ preferredColor: color }, () => {
      toast.success('Color preference saved!', { duration: 2000 })
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Choose Toggle Color</h2>
        <select
          className="border p-2 w-full"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <button
          onClick={saveColor}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Save Preference
        </button>
      </div>
    </div>
  )
}
