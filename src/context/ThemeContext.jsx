import { createContext, useState } from 'react'

const ThemeContext = createContext('light')

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    // Trigger ghost animation when switching to dark mode
    if (newTheme === 'dark') {
      document.body.classList.add('ghost-mode')
      setTimeout(() => {
        document.body.classList.remove('ghost-mode') // Remove animation class after a while
      }, 3000) // Adjust time to match the animation duration
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
