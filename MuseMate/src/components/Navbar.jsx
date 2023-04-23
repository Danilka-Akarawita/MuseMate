import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavbarStyles.css';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    
    <header>
      <Link to="/">Logo</Link>
        <nav ref={navRef}>
          
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
           <NavLink to="/signup">
            <Link>SignUp</Link>
           </NavLink>
          <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}>
              <FaTimes />
				</button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
			</button>
    </header>

      
        
       
  )
}
