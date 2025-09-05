import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Result from './pages/Result'
import Buycredits from './pages/Buycredits'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/buycredits" element={<Buycredits />} />
    </Routes>
    <Footer/>
  
    </>
  )
}

export default App
