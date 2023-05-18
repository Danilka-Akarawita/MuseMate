import { Box, Button, Card, CardActions, CardContent, Stack, Typography,TextField } from '@mui/material'
import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useEffect } from 'react';
import studioSample from '../assets/herostudio.jpg';
import { sample_data } from '../Utils/SampleData';
import {feedback} from '../controllers/controller'
import InstrumentCard from '../components/InstrumentCard';

const StudioDetailPage = () => {

    const {id}=useParams();
    
    const [newdata,setnewData]=useState(sample_data[id-1]);
   const[feedbackData,setFeedbackData]=useState("");
   const [error,setError]=useState(null);
    

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


    const handlefeedbacks = async () => {
      try {
        const user = await feedback(feedbackData);
        
        if (user) {
          console.log(user);
          setFeedbackData("");
        } else {
          setError("Invalid data ");
        }
      } catch (e) {
        setError(e.message);
      }
    };

  return (
    <Stack direction="column" height="90vh" >
      <Stack
        gap={10}
        sx={{ flexDirection: { sx: "column", md: "row" } }}
        height="100%"
       
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
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      
      <TextField
        label="Textarea"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={feedbackData} 
          onChange={(e) => setFeedbackData(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handlefeedbacks} >
        Add
      </Button>
    </Box>
    
      
     
      
    </Stack>
   
    
  );
}

export default StudioDetailPage