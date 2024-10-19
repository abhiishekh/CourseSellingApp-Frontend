import React, { useEffect, useState } from 'react'
import '../styles/mycourses.css'
import axios from 'axios'
import CourseCard from './CourseCard'
import myimg from '../assets/course2.jpg'
import CourseView from './CourseView'
const MyCourses = () => {

    // getting the data from mycourses server for mycourses page

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // This is the right way to use headers 
                const token = localStorage.getItem("token")
                // Check the headers if token is available or not 
                if (!token) {
                    console.log("you are not authorized")
                    return;
                }
                // made changes 
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/my-courses`, {
                    headers: {
                        token: token
                    }
                });
                // Check if the response is okay
                console.log(response)
                if (response.status === 200) {
                    setData(response.data.arr || []); // Assuming the response contains an array under 'arr'
                } else {
                    console.log("Failed to fetch data:", response.status);
                }
            } catch (err) {
                console.log(err)
            }
        };
        fetchData()
    }, [])
    return (
        <>
            <h1 style={{color:'#fff',textAlign:'center', marginBottom:'2rem'}}>Your Purchased Courses</h1>
        <div className='body'>
            {data.length > 0 ?
                (data.map((msg) => (

                    <CourseView
                        key={msg._id}
                        courseId={msg._id}
                        image={myimg}
                        title={msg.title}
                        price={msg.price}
                        desc={msg.description}

                    />
                ))) :
                (<p>No Purchase Yet</p>)
            }
        </div>
        </>
    )
}

export default MyCourses
