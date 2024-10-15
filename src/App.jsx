import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'


const App = () => {

  return (
    <div className='App'>
      <Nav />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<h1>Hello There</h1>} />
        
        </Routes>
      </main>
    </div>
  )
}

export default App