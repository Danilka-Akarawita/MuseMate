import { Card, CardContent, Typography,Box, CardMedia } from '@mui/material'
import React from 'react'
import keyboard from '../assets/instruments/keyboard_1.png'

const InstrumentCard = ({instrument}) => {
  return (
    <Box sx={{ width: { sx: "100%", md: "10%",lg:"15%" } }}>
        <Card sx={{width:"100%"}}>
            <CardMedia height="20%"  component="img" image={instrument.itemImage}/>
            <CardContent>
                <Typography variant='h6'>{`${instrument.itemModel} ${instrument.itemName}`}</Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default InstrumentCard