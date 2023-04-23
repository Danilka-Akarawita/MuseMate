import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import heroImage from '../assets/herostudio2.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate=useNavigate();
  return (
    <Box>
      <div className="heroImage">
        <Box 
          position="absolute"
          flexDirection="column"
          className='hero-text font-lemon'
        >
          <Typography sx={{fontSize:{xs:"20px",sm:"30px",md:"60px",lg:"70px"}}}   fontFamily="Lemon" >MuseMate</Typography>
          <Typography  sx={{fontSize:{xs:"15px",sm:"20px",md:"30px",lg:"35px"}}}  fontFamily="poppins">
            Make musical bookings a Breeze
          </Typography>
          <button onClick={()=>navigate("./")} className='herobtn' >Explore More</button>
          
        </Box>
        <div className='overlay'></div>
      </div>
    </Box>
  );
}


{/* <div className=" flex flex-col items-center  justify-center  h-screen m-16">
              <div data-aos="zoom-in-up" className="font-lemon text-5xl ">
                MuseMate
              </div>
              <div data-aos="zoom-in-up" className="font-lemon  ">
                Make musical bookings a breeze with MuseMate
              </div>
            </div> */}

export default Hero