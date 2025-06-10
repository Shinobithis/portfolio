import React, { useState } from 'react'

function DsSwitch() {
  const moon = <img className='h-7 w-7' src="./moon.svg" alt="moon" />
  const light = <img className='h-7 w-7' src="./light.svg" alt="light" />
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <button 
      onClick={() => setIsDarkMode(!isDarkMode)} 
      className="p-1 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? moon : light}
    </button>
  )
}

export default DsSwitch
