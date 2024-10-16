import React, { useState } from 'react'
import '../styles/usercard.css'
import userImg from '../assets/user.jpeg'
import { Link } from 'react-router-dom'
const UserCard = (props) => {
    const [formdata,setformData] = useState({created_courses:[]})


    const handleUser = async () =>{

        const tutorId = props.tutorId
        console.log(tutorId)
        localStorage.setItem('tutorid',tutorId)
        const response = await fetch('http://localhost:3000/api/v1/user',{
            headers:{
                tutorid:tutorId
            }
        })
        if(!response.ok){
           console.log("user data not found ")
           return
        }
        const data = await response.json()
        const result = data.response;
        console.log(result)
        setformData(result)
        
        if (formdata.created_courses && formdata.created_courses.length > 0) {
            // Print each created course
            formdata.created_courses.forEach(course => {
                console.log(course); // You can customize what to print here
            });
        } else {
            console.log("No created courses found.");
        }
    }
    // const handleButton = () => {
    // };
    // // console.log(formdata)


    return (
        <>
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
        </>
    )
}

export default UserCard
