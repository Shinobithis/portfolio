import { div } from 'motion/react-client'
import React, { useState } from 'react'

function DsSwitch() {
  const moon = <img className='h-7 w-7 cursor-pointer hover:h-9 hover:w-9 transition-all duration-300 ease-in-out' src="./moon.svg" alt="moon" />
  const light = <img className='h-7 w-7  cursor-pointer hover:h-9 hover:w-9 transition-all duration-300 ease-in-out' src="./light.svg" alt="light" />
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className="fixed top-3 right-3 z-50">
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        className="p-1 focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? moon : light}
      </button>
    </div>
  )
}

export default DsSwitch
