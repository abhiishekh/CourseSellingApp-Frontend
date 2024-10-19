import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import '../styles/createdcourses.css';
import courseImg from '../assets/course3.jpg'
import CourseView from './CourseView';

const CreatedCourses = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("start")

                if (!token) {
                    console.error('No token found');
                    alert('your are not signed in')
                    return; // Handle missing token appropriately
                }
                // made changes 

                console.log("fetching data")
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/courses`, {
                    headers: {
                        token: token,
                    },
                });
                if(!response){
                    console.log(response.error)
                }

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }
                console.log(response)

                const result = await response.json();
                console.log(result);
                setFormData(result.arr || []); // Use an empty array if response is undefined
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(formData)

    return (
        <div style={{ color: "white" }} className='container'>
            <h1 style={{display:'flex',alignItems:'center',justifyContent:'center', marginBottom:'2rem'}}>Your Created Courses</h1>
            <div className="created">
                {formData.length > 0 ? (
                    formData.map((msg) => (
                        <CourseView
                            key={msg._id}
                            title={msg.title}
                            desc={msg.description}
                            price={msg.price}
                            image={courseImg}
                        />
                    ))
                ) : (
                    <p>No courses yet....</p>
                )}
            </div>
        </div>
    );
};

export default CreatedCourses;
