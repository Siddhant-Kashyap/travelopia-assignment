import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Reviews from './components/Reviews'

function App() {
  

  return (
    <>
    <Header/>
    <HeroSection/>
    <Reviews/>
    </>
  )
}

export default App
