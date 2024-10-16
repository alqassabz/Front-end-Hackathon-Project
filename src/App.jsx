import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ThemeToggle from './components/ThemeToggle'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Rides from './components/Rides'
import rides from './rides'
import Ghosts from './components/Ghosts'

const App = () => {
  const { theme } = useContext(ThemeContext)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    // Apply the theme to the body or html element
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className="App ">
      <div className={theme}>
        <Nav />
       
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rides" element={<Rides rides={rides} />} />

            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        
      </div>
    </div>
  )
}

export default App
