import React, { useEffect, useRef, useState } from 'react';
import '../styles/nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Nav = () => {
  const [auth, setAuth] = useState(false);
  const [isCreator, setIsCreator] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {

      const token = localStorage.getItem("token");
      const isCreator = localStorage.getItem("isCreator") === 'true';
      setAuth(!!token);
      setIsCreator(isCreator);
  

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isCreator")
    setIsCreator(isCreator === 'false')
    setAuth(false); // Update local state
    // authRef.current = false  
    navigate('/'); // Navigate to signin after logout
  };
  const handleAuth = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert("you are not signed in")
      return
    }
  }

  const handletoggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="nav">
      <div className="logo">
        <h1>Coding School</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        {!isCreator && <Link to="/tutor">Tutors</Link>}
        {(auth && <Link to="/MyCourses">MyCourses</Link>)}

        {isCreator && <Link to="/creactedcourses" onClick={handleAuth}>Created-Courses</Link>}
      </div>


      {/* // responsive line */}
      <div className="responsive">
        <div className="menu" onClick={handletoggle}>
          <IoMenu />
        </div>
      </div>

      {/* // side menu  */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-links">
          <Link to="/" onClick={handletoggle}>Home</Link>
          {!isCreator && <Link to="/tutor" onClick={handletoggle}>Tutors</Link>}
          {auth && <Link to="/MyCourses" onClick={handletoggle}>MyCourses</Link>}
          {isCreator && <Link to="/creactedcourses" onClick={handletoggle}>Created-Courses</Link>}
        </div>
        <div className="btns" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: '0.5rem'
        }}>
          <div className="signin">
            {isCreator ? (
              <Link to='/createcourse' onClick={handletoggle}><button>Create-Course</button></Link>
            ) : (
              null
            )}
          </div>
          <div className="signin">
            {auth ? (
              <Link to='/'  onClick={handletoggle}><button onClick= {handleLogout} >Logout</button></Link>
            ) : (
              <Link to="/signin" onClick={handletoggle}><button>Signin</button></Link>
            )}
          </div>


        </div>
      </div>

      {/* // other btn line */}
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
