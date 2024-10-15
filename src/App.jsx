import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'


const App = () => {
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

  return (
    <div className="App">
      <Nav user={user} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<h1>Hello There</h1>} />

          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
