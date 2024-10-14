import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name,type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox'? checked:value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        isCreator:formData.checkbox
      });

      if (response.status === 200) {
        console.log("Signup successful:", response.data);
        navigate('/signin'); // Navigate on successful signup
      } else {
        console.log("Data not submitted");
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
          <label htmlFor="checkbox">Are you a creator</label>
          <input
            type="Checkbox"
            id="checkbox"
            name="checkbox"
            value={formData.checkbox}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
