import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import jwtDecode from 'jwt-decode'
import Logout from "../Logout";
import {connect} from 'react-redux'


const Navbar = ({saved}) => {

  let user;

  
  try {
    const token=localStorage.getItem("token");
    
     user = jwtDecode(token);
    
  } catch (error) {
    console.log(error);
    
  }




  return (
    <div className="header__nav">
      <div className="nav__content">
        <h2 className='logo'>Shopp&Sell</h2>
        <nav>
          <ul className="nav__list">
            <li>
              <NavLink className="nav__link" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/courses">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/about" >
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li>
  <sup className="super">{saved.length}</sup>
              <NavLink className="nav__link" to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {
!user?<div className="header__buttons">
<NavLink className="btn btn-login" to="/login">
  Login
</NavLink>
<NavLink className="btn btn-signup" to="/signup">
  Signup
</NavLink>
</div>:<Logout></Logout>
      }
      
    </div>
  );
};


const getSavedList=(state)=>{
  return{
    saved:state.savedList.saved
  }
}

export default connect(getSavedList)(Navbar);
