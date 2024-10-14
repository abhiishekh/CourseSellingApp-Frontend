import React, { useEffect, useState } from 'react';
import '../styles/nav.css';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [auth, setAuth] = useState(false);
  const [isCreator,setIsCreator] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isCreator = localStorage.getItem("isCreator")
    setIsCreator(isCreator === 'true')
    console.log(isCreator)
    setAuth(!!token); // Convert token presence to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isCreator")
    setIsCreator(isCreator === 'false')
    setAuth(false); // Update local state
    navigate('/'); // Navigate to signin after logout
  };

  return (
    <div className="nav">
      <div className="logo">
        <h1>Coding School</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        {auth && <Link to="/MyCourses">MyCourses</Link>} {/* Only show if authenticated */}
        {/* <Link to="/about">About</Link> */}
      </div>
      <div className="btns">
      <div className="signin">
        {isCreator ? (
          <Link to='/createcourse'><button>Create-Course</button></Link>
        ) : (
          null
        )}
      </div>
      <div className="signin">
        {auth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/signin"><button>Signin</button></Link>
        )}
      </div>
     

      </div>
    </div>
  );
};

export default Nav;
