import React from 'react'
import '../styles/coursecard.css'
import { Link,useNavigate } from 'react-router-dom'
const CourseCard = (props) => {
    
  const navigate = useNavigate()

  const handleBuyNow =()=>{
    localStorage.setItem('courseId',props.courseId)
    console.log(props.courseId)
    navigate('/buycourse')
  }

  return (
    <>
      <div className="card-body">
        <img style={{backgroundRepeat:'no-repeat'}} src={props.image} alt="" />
          <div className="cover">
        <div className="card-items">

            <div className="title-price">

            <h2>{props.title}</h2>
            <h3>{`${props.price}.00`}</h3>
            </div>
            <p>{props.desc}</p>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default CourseCard
