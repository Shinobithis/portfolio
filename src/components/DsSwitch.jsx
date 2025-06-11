import { div } from 'motion/react-client'
import React, { useState } from 'react'

<<<<<<< HEAD
function DsSwitch({ onToggle, currentTheme }) { // Added props for theme management
  const moon = <img className='h-7 w-7 cursor-pointer hover:h-9 hover:w-9 transition-all duration-300 ease-in-out' src="./moon.svg" alt="moon" />
  const light = <img className='h-7 w-7  cursor-pointer hover:h-9 hover:w-9 transition-all duration-300 ease-in-out' src="./light.svg" alt="light" />

  // The state will now be managed by the parent component (App.jsx)
  // const [isDarkMode, setIsDarkMode] = useState(true) 

  return (
    <div className="fixed top-3 right-3 z-50 hidden md:block"> {/* Added hidden md:block */}
      <button 
        onClick={onToggle} // Use the passed onToggle function
        className="p-1 focus:outline-none"
        aria-label="Toggle dark mode"
      >
        {currentTheme === 'dark' ? moon : light} {/* Use currentTheme prop */}
=======
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
>>>>>>> 5e65a2ccef6a3d0e70384aa9c188255dd3182d0a
      </button>
    </div>
  )
}

export default DsSwitch
