import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useEffect } from 'react';
import studioSample from '../assets/herostudio.jpg';
import { sample_data } from '../Utils/SampleData';
import InstrumentCard from '../components/InstrumentCard';

const StudioDetailPage = () => {

    const {id}=useParams();
    
    const [newdata,setnewData]=useState(sample_data[id-1]);

    

    useEffect(()=>{
        
        console.log(id);
        const takenData=sample_data[id-1];
        console.log(takenData);
        const setdatatoget=()=>{
            setnewData(takenData);
        }

        setdatatoget();
        // console.log(sample_data[id-1]);
        console.log(newdata);
    },[id,newdata])



  return (
    <Stack direction="column" height="97vh" border="2px solid red">
      <Stack
        gap={10}
        sx={{ flexDirection: { sx: "column", md: "row" } }}
        height="100%"
        border="2px solid red"
        alignItems="center"
        justifyContent="center"
      >
        <img style={{ width: "50%" }} src={studioSample} />
        

        <Box sx={{ width: { sx: "100%", md: "40%" } }} height="70%">
          <Card>
            <CardContent>
              <Typography variant="h3">{newdata.studioName}</Typography>
              <Typography variant="h6">{newdata.description}</Typography>
              <Typography variant='h6'>Instruments</Typography>
              <ul style={{marginLeft:"30px"}}>
                {/* {(newdata.instruments).map((item)=>(
                    <li>{item.itemName}</li>
                ))} */}
              </ul>
            </CardContent>
            <CardActions>
                <Button size='large'>Book Now</Button>
            </CardActions>
          </Card>
        </Box>
      </Stack>
      <Stack width="100%" height="100%" direction="row" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap={2}>
        {
            // (newdata.instruments).map((item)=>(
            //     <InstrumentCard instrument={item}/>
            // ))
        }
            
      </Stack>
    </Stack>
  );
}

export default StudioDetailPage