import React from 'react'
// import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Signup from './components/Signup'
import Signin from './components/Signin'
import MyCourses from './components/MyCourses'
import Courses from './components/Courses'
import CreateCourse from './components/CreateCourse'
import ProtectRoute from '../auth/ProtectRoute'

const App = () => {
  return (
  
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path="/" element={<Hero/>}/>
     <Route path='/courses' element={<Courses/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/createcourse' element={<CreateCourse/>}/>
     <Route path='/MyCourses' element={
      <ProtectRoute>
      <MyCourses/>
      </ProtectRoute>
      }/>

      </Routes>
      </BrowserRouter>

  )
}

export default App
