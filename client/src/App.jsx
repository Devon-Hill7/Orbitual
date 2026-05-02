import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
     <main className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </main>
  )
}

export default App
