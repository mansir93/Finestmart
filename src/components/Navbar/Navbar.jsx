import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='mart__navbar'>
      <div className='mart__navbar-container'>
        <h1>FinestMart</h1>
        <div className="mart__navbar-container__menus">
          <p><a href='#' className='active'>Home</a></p>
          <p><a href='#'>Categories</a></p>
          <p><a href='#'>Sales</a></p>
          <p><a href='#'>FAQ</a></p>
          <p><a href='#'>About</a></p>
          <p><a href='#'>Contact</a></p>
        </div>
        <div className="mart__navbar-container__links">
          <a href='#' className='btn signinbtn' >sign in</a>
          <a href='#'className='btn signupbtn'>sign up</a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
