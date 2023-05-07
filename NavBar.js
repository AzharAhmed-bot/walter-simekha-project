import React from "react";
import { NavLink } from "react-router-dom";


function NavBar({logo}){
  
  return(

    <nav className="navbar">
        <NavLink className='navlink' to="/home">HOME </NavLink>
        <NavLink className='navlink' to="/booking">BOOK NOW! </NavLink>
        <NavLink className='navlink' to="/login">LOG IN </NavLink>
        <NavLink className='navlink' to="/about">ABOUT</NavLink>     
    </nav>
   
  )
}
export default NavBar
