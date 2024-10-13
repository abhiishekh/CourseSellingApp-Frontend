import React from 'react'
// import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  return (
  
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path="/" element={<Hero/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/signin' element={<Signin/>}/>

      </Routes>
      </BrowserRouter>

  )
}

export default App
