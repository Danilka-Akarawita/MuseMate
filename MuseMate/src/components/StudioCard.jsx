import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import studio404 from '../assets/studio404.jpg';


const StudioCard = ({data}) => {

   

  return (
    <Box width="350px">
      <Card height="400px">
        <CardMedia
          component="img"
          height="140"
          src={studio404}
          alt="studio Card"
        />

        <CardContent  sx={{backgroundColor:"#E3CCAE"}}>
          <Typography gutterBottom variant="h5" component="div">
            {data.studioName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions sx={{backgroundColor:"#E3CCAE"}}>
          
          <NavLink to={`/details/${data.id}`}>
              <Button>Visit !</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StudioCard;