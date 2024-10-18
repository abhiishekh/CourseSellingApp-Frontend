import React, { useState } from 'react'
import '../styles/createcourse.css'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'



const CreateCourse = () => {
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    title:'',
    description:'',
    price:0,
    checkbox:false
  })

  const handleChange =(e)=>{
    const { name,type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox'? checked:value });
  }
  const handleSubmit =async (e) =>{
    e.preventDefault()

    try {

      const token = localStorage.getItem('token')
      if(!token){
        alert('Your are not signed in')
       
        navigate('/signin')
      }
//made changes
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/course`,{
        title:formData.title,
        description:formData.description,
        price:formData.price,
        isPublished:formData.checkbox
      },
      {
        headers:{
          token:token
        }
      });

      if(response){
        navigate('/creactedcourses')
      }else{
        console.log("course not created")
      }
    } catch (err) {
    
      console.log(err)
    }
  }


  return (
    <>
     {/* <div className="container"> */}
      <div className="course-container">

      <h2>Create a Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='title'>Title</label>
          <input 
          type="text"
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
          />
        </div>
        <div className="form-group">
          <label htmlFor='description'>Description</label>
          <input 
          type="text"
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          required
          />
        </div>
        <div className="form-group">
          <label htmlFor='price'>Price</label>
          <input 
          type="number"
          id='price'
          name='price'
          value={formData.price}
          onChange={handleChange}
          required
          />
        </div>
        <div className="form-group">
          <div className="check">

          <label htmlFor="checkbox">Is this public Course</label>
          <input
            type="Checkbox"
            id="checkbox"
            name="checkbox"
            value={formData.checkbox}
            onChange={handleChange}
          />
          </div>
        </div>
        <button onClick={handleSubmit}>Create Course</button>
      </form>
      </div>
     {/* </div> */}
    </>
  )
}

export default CreateCourse
