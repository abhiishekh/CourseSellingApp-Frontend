import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/buynow.css'
import courseImg from '../assets/course3.jpg'
import { useNavigate } from 'react-router-dom'


const BuyCourse = () => {

    const navigate = useNavigate()

    const [course,setCourse] = useState({
        title:'',
        description:'',
        price:''
    })
    useEffect(()=>{
        const fetchcourse = async()=>{
            try {
                
                const courseId = localStorage.getItem('courseId')
                console.log(courseId)
                if(!courseId){
                    console.log("courseid not found")
                    return;
                }
                // here made changes in backend url change
                const respones = await fetch(`${import.meta.env.VITE_BACKEND_URL}/course/${courseId}`)
                if(!respones.ok){
                    throw new Error(`Error fetching course: ${respones.status}`)
                }
    
    
                const result = await respones.json();
                console.log(result.response)
                setCourse(result.response )

            } catch (error) {
                console.log(error)
                return;
            }
        }
        fetchcourse()
    },[])

    async function handlePayNow(){
        const token = localStorage.getItem('token')
        const courseId = localStorage.getItem('courseId')

        
        //here made changes in backedn url
       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/purchase/${courseId}`,{},{
        headers:{
            token :token
        }
       })

       if(!response){
        console.log("not purchased")
        return res.json({
            message:"something went wrong"
        })
    }
    navigate('/MyCourses')
       alert(response.data.message)
    }


  return (
    <>
      <div className="course-cover">
        <div className="details">
            <div className="details_course">
            <img src={courseImg} alt="" />
            <div className="course_details">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>{course.price}</p>
            </div>
            </div>
            {/* <button>Pay with UPI</button>
            <button>Pay with Cripto</button> */}
            <button onClick={handlePayNow}>Pay Now</button>
        </div>
      </div>
    </>
  )
}

export default BuyCourse
