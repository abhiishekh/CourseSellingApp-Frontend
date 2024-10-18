import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard';
import cardImg from '../assets/course2.jpg'
import '../styles/tutor.css'
import UserCard from './UserCard';
const Tutor = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // made changes
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tutors`);

                // Check if the response is okay before proceeding
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }

                const result = await response.json();
                // console.log(result.response)
                setData(result.response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="tutor-container" >
                <div className="heading">
                    <h1>All Tutors</h1>
                </div>
                <div className="tutor-cards">

                    {data.length > 0 ? (
                        data.map((msg) => (

                            <UserCard 
                                key={msg._id}
                                tutorId={msg._id}
                                username={msg.username}
                                email={msg.email}
                            />
                        ))
                    ) : (
                        <p>No tutor</p>
                    )
                    }

                </div>
            </div>
        </>
    )
}

export default Tutor
