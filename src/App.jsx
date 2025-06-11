import React, { useState, useEffect } from 'react' // Import useEffect
import DsSwitch from './components/DsSwitch'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed default to true for dark mode

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = isDarkMode ? 'dark' : 'light'; // Derive theme string

  // Apply overall page background based on theme (you'll need to define these classes in your CSS)
  const pageBgClass = isDarkMode ? 'bg-primary-dark' : 'bg-primary-light'; 

  // Effect to update the 'dark' class on the html tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${pageBgClass}`}>
      <NavBar onToggle={toggleTheme} currentTheme={theme} />
      <DsSwitch onToggle={toggleTheme} currentTheme={theme} />
      <HeroSection />
    </div>
  )
}

export default App
