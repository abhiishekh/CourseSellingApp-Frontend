import React from 'react'
import '../styles/featured.css'
import CourseCard from './CourseCard'
const Featured = () => {
    const arr = {
        title:"webdev",
        desc:"this is the webdev course where you will learn about coding from 0 to advance",
        price:"$19.00",
    }


  return (
    <>
      <div className="featured-container">
        <div className="heading">
            <h1>Featured Courses</h1>
        </div>
        <div className="cards">

        <CourseCard 
        title={arr.title}
        desc={arr.desc}
        price={arr.price}

        />
        <CourseCard 
        title='web3'
        desc="this is the web3 course where you will learn about blockchain from 0 to advance"
        price="$39.00"

        />

        
        </div>
      </div>
    </>
  )
}

export default Featured
