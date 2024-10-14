import React from 'react'
import '../styles/hero.css'
import heroImg from '../assets/hero.jpg'
import Featured from './Featured'
const Hero = () => {
  const token = localStorage.getItem("token")
  // console.log(token)
  return (
    <>
      <div className="container">
        <a href="#">
        <div className="image">
            </div>
        </a>
        
      </div>
      <Featured/>
    </>
  )
}

export default Hero
