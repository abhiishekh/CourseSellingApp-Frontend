import React, { useState,useEffect } from 'react';
import '../styles/signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({          
    username: '',
    email: '',
    password: '',
    checkbox:false
  });
  const [Error, setError] = useState('')

  const handleChange = (e) => {
    const { name,type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox'? checked:value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')

 
    try {
      // made changes
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        isCreator:formData.checkbox
      });
      console.log(response.data.response)
      if (response.status === 200 && response.data.response) {
        console.log("Signup successful:", response.data);
        navigate('/signin'); // Navigate on successful signup
      } else {
        setError(response.data.error || 'An error occured during signup.')
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="check">
          <label htmlFor="checkbox">Are you a creator</label>
          <input
            type="Checkbox"
            id="checkbox"
            name="checkbox"
            value={formData.checkbox}
            onChange={handleChange}
          />
          </div>
        </div>
       {Error && <div className="error">
          <p style={{color:'red'}}>{Error}</p>
        </div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
