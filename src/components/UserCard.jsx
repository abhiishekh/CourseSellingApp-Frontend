import React, { useState } from 'react'
import '../styles/usercard.css'
import userImg from '../assets/user.jpeg'
import { Link } from 'react-router-dom'
import TutorDetails from './TutorDetails'
import courseImg from '../assets/course3.jpg'
import CourseCard from './CourseCard'
const UserCard = (props) => {
    const [formdata,setformData] = useState([])
    const [click,setClick] = useState(false)

    const handleUser = async () =>{

        const tutorId = props.tutorId
        const response = await fetch(`http://localhost:3000/api/v1/tutor-courses/${tutorId}`)
        if(!response.ok){
           console.log("user data not found ")
           return
        }

        const result = await response.json()
        const data = result.data;
        // console.log(data)
        setformData(data)
        setClick(click=>!click)
     
        
    }

    // console.log(formdata)


    return (
        <>
        <div className="user-container">
            <div className="items" onClick={handleUser}>
                <div className="user-image">
                    <img src={userImg} alt="user image" />
                </div>
                
                <div className="user-details">
                    <h3>{props.username}</h3>
                    <p>{props.email}</p>
                </div>
            </div>
            {/* <button onClick={handleButton}>click</button> */}
            <div className='tutor-course-details'>
            {click && formdata.map((course)=>(
                <CourseCard
                key = {course._id}
                courseId ={course._id}
                title ={course.title}
                desc={course.description}
                price={course.price}
                image={courseImg}
                />
            ))
            }
            </div>
            </div>
        </>
    )
}

export default UserCard
