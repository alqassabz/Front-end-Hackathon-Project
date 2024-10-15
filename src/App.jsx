import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ThemeToggle from './components/ThemeToggle'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="App ">
      <div className={theme}>
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/rides"
              element={
                <div className="boxes">
                  {
                    // Do something here inside the map
                    <>
                      <div className="box">
                        <h1>Hello</h1>
                      </div>
                      <div className="box">
                        <h1>Hello</h1>
                      </div>
                      <div className="box">
                        <h1>Hello</h1>
                      </div>
                      <div className="box">
                        <h1>Hello</h1>
                      </div>
                      <div className="box">
                        <h1>Hello</h1>
                      </div>
                      <div className="box">
                        <h1>Hello</h1>
                      </div>
                    </>
                  }
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
