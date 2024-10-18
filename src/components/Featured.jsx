import React, { useEffect, useState } from 'react';
import '../styles/featured.css';
import CourseCard from './CourseCard';
import cardImg from '../assets/course3.jpg'

const Featured = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/featured-courses`)
                // const response = await fetch('http://localhost:3000/api/v1/featured-courses');

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

    console.log(data);

    return (
        <>
            <div className="featured-container">
                <div className="heading">
                    <h1>Featured Courses</h1>
                </div>
                <div className="cards">
                    {data.length > 0 ? (
                        data.map((msg,) => (
                            <CourseCard
                                key={msg._id}
                                courseId={msg._id}
                                title={msg.title}
                                desc={msg.description}
                                price={msg.price}
                                image={cardImg}
                            />
                        ))
                    ) : (
                        <p>Loading courses...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Featured;
