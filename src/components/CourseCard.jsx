import React from 'react'
import '../styles/coursecard.css'
import courseImg from '../assets/course3.jpg'
const CourseCard = (props) => {
    

  return (
    <>
      <div className="card-body">
        <img style={{backgroundRepeat:'no-repeat'}} src={props.image} alt="" />
          <div className="cover">
        <div className="card-items">

            <div className="title-price">

            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            </div>
            <p>{props.desc}</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default CourseCard
