import React from 'react'
import Navbar1 from './components/Navbar1'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Contact from './pages/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
