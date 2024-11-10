import React , {useState} from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'


import Home from './Components/Home'
import Contact from './Components/Contact'
import Location from './Components/Location'
import Footer from './Components/Footer'

const App = () => {
  
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/location' element={<Location/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App