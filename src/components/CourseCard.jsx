import React from 'react'
import '../styles/coursecard.css'
const CourseCard = (props) => {
    

  return (
    <>
      <div className="card-body">
        <div className="card-items">
            <div className="title-price">

            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            </div>
            <p>{props.desc}</p>
            <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default CourseCard
