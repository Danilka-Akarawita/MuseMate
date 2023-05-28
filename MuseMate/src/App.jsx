
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import "aos/dist/aos.css";

import AOS from 'aos'
import Booking from './pages/Booking';
import { Box } from '@mui/material';
import Navbar from './components/navbar';
import StudioDetailPage from './pages/StudioDetailPage';




function App() {
  // React.useEffect(() => {
  // //   AOS.init({duration: 1000})
  // }, [])

  

  return (
    
    <Box sx={{border:"2px solid "}}  m="auto">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<StudioDetailPage/>} />
        <Route path="/book" element={<Booking />} />

        {/* <Route path="/studioDetails/:id" element={<StudioDetailPage/>}/> */}
      </Routes>
      
    </Box>
    
     
  )
}

export default App
