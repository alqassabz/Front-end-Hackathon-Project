import { createContext, useState } from 'react'

const ThemeContext = createContext('light')

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    console.log('TOGGLING!')
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')) //want this to return smth
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
