import { FiSun, FiMoon } from 'react-icons/fi'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'


const ThemeToggle = () => {

  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className="theme-slider-toggle" onClick={toggleTheme}>
      <div className="toggle">
        <div className="slider" />
        <div className="icon-container">
          <FiSun className="sun-icon" />
          <div className="spacer"></div>
          <FiMoon className="moon-icon" />
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle
