import React from 'react'
import '../styles/nav.css'
const Nav = () => {

  return (
    <>
      <div className="nav">
        <div className="logo">
            <h1>Coding Schoole</h1>
           
        </div>
        <div className="links">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">MyCourses</a>
            <a href="#">About</a>
        </div>
        <div className="signin">
            <button>Signin</button>
        </div>
      </div>
    </>
  )
}

export default Nav
