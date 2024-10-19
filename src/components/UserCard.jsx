import React, { useState } from 'react'
import '../styles/usercard.css'
import userImg from '../assets/teacher.jpg'
import { Link } from 'react-router-dom'
import TutorDetails from './TutorDetails'
import courseImg from '../assets/course3.jpg'
import CourseCard from './CourseCard'
const UserCard = (props) => {
    const [formdata,setformData] = useState([])
    const [click,setClick] = useState(false)

    const handleUser = async () =>{

        const tutorId = props.tutorId
        // made changes
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tutor-courses/${tutorId}`)
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
