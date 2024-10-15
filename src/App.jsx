// import { useState, useEffect } from 'react'
// import { Route, Routes } from 'react-router'
// import Food from './components/Food'
// import GiftShop from './components/GiftShop'
// import Rides from './components/Rides'
import Home from './pages/Home'
// import Register from './pages/Register'
// import SignIn from './pages/SignIn'
import Nav from './components/Nav'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Nav />
      <main>
      <Home />
    
      </main>
    
    </div>
  )
}

export default App
