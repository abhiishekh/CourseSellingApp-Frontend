import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useAuth } from '../ContextApi/AuthContext';


const Signin = () => {

  const {login} = useAuth()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [Error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //made changes
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signin`, {
        email: formData.email,
        password: formData.password,
      });
      console.log(response)
      if (response.status === 200 ) {
        console.log(response.data.token)
        const token = response.data.token;
        const isCreator = response.data.isCreator; // Correctly accessing isCreator
        // console.log("Is Creator:", isCreator);
        // console.log(isCreator)
        localStorage.setItem('token',token)
        localStorage.setItem('isCreator',isCreator)
  
        // console.log("Signin successful:", response.data);
        login(token,isCreator)
        navigate('/'); // Navigate on successful signup
      } else {
        setError(response.data.message)
        console.log(response.data.message)
      }
    }  catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || 'An error occurred during sign-in.');
        console.error("Error during signin:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Please try again later.');
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('An unexpected error occurred. Please try again.');
        console.error("Error during signin:", error.message);
      }
    }
  };
  return (
    <div className="signup-container">
    <h2>Signin</h2>
    <form onSubmit={handleSubmit}>
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
      {Error && <div className="error">
          <p style={{color:'red'}}>{Error}</p>
        </div>}
      <button type="submit">Sign In</button>
      <p style={{color:"black", marginTop:'1rem'}}>Don't have an I'd <Link to='/signup' style={{textDecoration:'none'}}>Signup</Link></p>
    </form>
  </div>
  )
}

export default Signin
