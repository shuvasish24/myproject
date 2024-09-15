import React, { useState } from "react";
import Logo from "../assets/images/header_logo.png";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
 <header className="headersec">
	<div className="container">
		<div className="hderinr">
			<div className="hdrlgo">
				<img src={Logo} alt="" onClick={ () => scroll.scrollToTop() } />
			</div>
			<div className="hdrmnu">
          <ul>
            <li><NavLink className={(e)=>{return e.isActive?"menu-active": ""}} to='/'>Home</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"menu-active": ""}} to='/about'>About</NavLink></li>
            <li><NavLink to='/#url'>service</NavLink></li>
            <li><NavLink to='/#url'>Blog</NavLink></li>
            <li><NavLink className={(e)=>{return e.isActive?"menu-active": ""}} to='/contact'>contact</NavLink></li>
          </ul> 
			</div>
		</div>
	</div>
</header>

  )
}

export default Navbar