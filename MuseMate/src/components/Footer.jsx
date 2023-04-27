import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Padding } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Stack>
            <Stack direction="row" spacing={12} sx={{ backgroundColor: '#E3CCAE' }} pt={4}>
           <Box mt={8}  direction="row"  gap={5}
           
            sx={{
                
                height:"50px",
                width: 350,
                marginLeft:10
                
            }}>
            <FacebookRoundedIcon/>
            <YouTubeIcon/>
            
            
            
           </Box>


            <Box 
            sx={{
                
                height:"200px",
                width: 350,
                marginLeft:60
            }}>
                <p className ="pt-2" >CONTACT INFO</p>
                <p className ="pt-2" >
                    <LocationOnIcon/> Address: 360/1/A Katuwana rd, Kahatagahalande mw, Homagama, Sri Lanka
                </p>
                <p className ="pt-2" >
                   <EmailIcon/>  Email: nishandanilka@gmail.com
                </p>
                <p className ="pt-2" >
                   <PhoneIcon/> Hotline: 0750524198
                </p>
            </Box>
            <Box 
             sx={{
                
                height:"200px",
                width: 150,
                marginLeft:60
            }}>
                <p className ="pt-2" > INFORMATION</p>
                <NavLink to="">
                        AboutUs
                        <br/>
                 </NavLink>
                 <NavLink to="">
                        Get in Touch
                        <br/>
                 </NavLink>
                 <NavLink to="">
                        Feedback
                 </NavLink>
                
                
            </Box>
            
            </Stack>
            <Stack marginLeft="30%">
                <Typography varient="h6">Copyright © 2023 MuseMate. All rights reserved. Crafted by xyz Technology</Typography>
            </Stack>
       
    </Stack>
  )
}
