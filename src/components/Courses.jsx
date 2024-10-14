import React, { useState ,useEffect} from 'react'
import CourseCard from './CourseCard';
import cardImg from '../assets/course2.jpg'
import '../styles/course.css'
const Courses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/all-courses');

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
  return (
    <>
    <div className="courses-container" style={{backgroundColor:'#243642'}}>
        <div className="heading">
            <h1>All Courses</h1>
        </div>
        <div className="cards">
            {data.length > 0 ? (
                data.map((msg, _id) => (
                    <CourseCard
                        key={msg._id}
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
  )
}

export default Courses
