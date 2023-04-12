import React from 'react'
import Navbar from '../components/navbar'
import SignUp from './SignUp'
import StudioSection from '../components/StudioSection'
import Booking from './Booking'



export default function Home() {
  return (
    <>
   <Navbar/>
   
   <div  className=" flex flex-col items-center  justify-center  h-screen m-16">
   <div data-aos="zoom-in-up" className="font-lemon text-5xl ">MuseMate</div>
    <div data-aos="zoom-in-up" className="font-lemon  ">Make musical bookings a breeze with MuseMate</div>
    </div>
    <StudioSection/>
  
    
   </>
    
  )
}
