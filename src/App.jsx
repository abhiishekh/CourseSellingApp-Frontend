import React from 'react'
// import './App.css'
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Signup from './components/Signup'
import Signin from './components/Signin'
import MyCourses from './components/MyCourses'
import CreateCourse from './components/CreateCourse'
import ProtectRoute from '../auth/ProtectRoute'
import CreatedCourses from './components/CreatedCourses'
import Tutor from './components/Tutor'
import BuyCourse from './components/BuyCourse'
import Footer from './components/Footer'

const App = () => {
  const isAuth = !!localStorage.getItem('token');
  const isCreator = localStorage.getItem('isCreator') === 'true';
  return (
  
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path="/" element={<Hero/>}/>
     <Route path='/tutor' element={<Tutor/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/createcourse' element={isAuth && isCreator? <CreateCourse /> : <Navigate to='/'/>}/>
     <Route path='/creactedcourses' element={<CreatedCourses/>}/>
     <Route path='/buycourse' element={<BuyCourse/>}/>
     <Route path='/MyCourses' element={
      <ProtectRoute>
      <MyCourses/>
      </ProtectRoute>
      }/>

      </Routes>
      <Footer/>
      </BrowserRouter>

  )
}

export default App
