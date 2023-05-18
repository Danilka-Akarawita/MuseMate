import React from 'react'
import Navbar from '../components/navbar'
import SignUp from './SignUp'
import StudioSection from '../components/StudioSection'
import Booking from './Booking'
import { Box, Container, Stack, Typography } from '@mui/material'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import StudioHolder from '../components/StudioHolder'



export default function Home() {
  return (
    <Box sx={{ border: "2px solid " }}>
      <Stack direction="column">
        <Hero/>
        <StudioHolder/>
      </Stack>

      {/* <StudioSection/> */}
      <Footer/>
      
    </Box>
    
  );
}
