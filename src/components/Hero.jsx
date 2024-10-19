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
        {/* <a href="#"> */}
        <div className="hero">
          <div className="left">
            <h1>Learn skills that matter.<br/> Build a better future.</h1>
            <p></p>
          </div>
          <div className="right">
            <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249760%2Fu_c_1_t79muq.webp&w=640&q=75" alt="" />
          </div>
            </div>
        {/* </a> */}
        
      </div>
      <Featured/>
    </>
  )
}

export default Hero
