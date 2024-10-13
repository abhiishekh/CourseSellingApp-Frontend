import React from 'react'
import '../styles/nav.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Nav = () => {
  

  return (
    <>
      <div className="nav">
        <div className="logo">
            <h1>Coding School</h1>
           
        </div>
        <div className="links">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">MyCourses</a>
            <a href="#">About</a>
        </div>
        <div className="signin">
           <Link to='/Signup'><button>Signup</button></Link> 
        </div>
      </div>
    </>
  )
}

export default Nav
