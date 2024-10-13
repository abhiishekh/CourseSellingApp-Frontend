import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'
import axios from 'axios'
const Signin = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/signin', {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        console.log("Signin successful:", response.data);
        navigate('/'); // Navigate on successful signup
      } else {
        console.log("Data not submitted");
      }
    } catch (error) {
      console.error("Error during signin:", error);
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
      <button type="submit">Sign In</button>
    </form>
  </div>
  )
}

export default Signin
