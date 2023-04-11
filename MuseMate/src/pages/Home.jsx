import React from 'react'
import Navbar from '../components/navbar'
import SignUp from './SignUp'
import StudioSection from '../components/StudioSection'



export default function Home() {
  return (
    <>
   <Navbar/>
   
   <div className=" m-16">
   <div className="font-lemon text-5xl ">MuseMate</div>
    <div className="font-lemon  ">Make musical bookings a breeze with MuseMate</div>
    </div>
    <StudioSection/>
    
   </>
    
  )
}
