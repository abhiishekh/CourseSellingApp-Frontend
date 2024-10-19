import React from 'react'

const CourseView = (props) => {

  const handleView =()=>{
    alert("Currently View Button is not Functional")
  }
  return (
    <>
      <div className="card-body">
        <img style={{backgroundRepeat:'no-repeat'}} src={props.image} alt="" />
        <div className="cover">
            <div className="card-items">
                <div className="title-price">
                    <h2>{props.title}</h2>
                    <p>{`${props.price}.00`}</p>
                </div>
                <p>{props.desc}</p>
                <button onClick={handleView}>View Course</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CourseView
