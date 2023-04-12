import React from 'react'
import './studiosection.css'
import { NavLink } from 'react-router-dom'


export default function StudioSection() {
  return (
    <div className="ui-card">
        <img
         data-aos="zoom-in-up" className="m-4 object-cover rounded-lg"
          src='./images/Mic.png' alt='Studio 1'></img>
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="  space-x-4 mt-4 justify-center  flex flex-row">
            <NavLink to="/signup">
                <p>Book!</p>
           </NavLink>
           <NavLink to="/signup">
                <p>Details</p>
           </NavLink>
            </div>
            
          </div>
    </div>
  )
}
