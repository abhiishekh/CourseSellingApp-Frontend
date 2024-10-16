import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard';
import cardImg from '../assets/course2.jpg'
import { useNavigate } from 'react-router-dom';
import '../styles/course.css'
import UserCard from './UserCard';
const Tutor = () => {

    const navigate = useNavigate()
    const [click,setClick] = useState(true)
    const [data, setData] = useState([]);
    const [selectedTutor, setSelectedTutor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/tutors');

                // Check if the response is okay before proceeding
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }

                const result = await response.json();
                console.log(result.response)
                setData(result.response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);
    const handleUserCardClick = (tutor) => {
        setSelectedTutor(tutor); // Set the selected tutor when UserCard is clicked
    };
    
    // console.log(selectedTutor)
    
    return (
        <>
            <div className="courses-container" style={{ backgroundColor: '#243642' }}>
                <div className="heading">
                    <h1>All Tutors</h1>
                </div>
                <div className="cards">

                    {data.length > 0 ? (
                        data.map((msg) => (

                            <UserCard 
                                key={msg._id}
                                tutorId={msg._id}
                                username={msg.username}
                                email={msg.email}
                                onClick={()=>handleUserCardClick(msg)}
                            />
                        ))
                    ) : (
                        <p>No tutor</p>
                    )
                    }

                </div>
                {/* {click && <CourseCard
                title='working'
                desc='heheheheheeh'
                price='9999'

                />} */}
            </div>
        </>
    )
}

export default Tutor
