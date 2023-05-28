import { Box, Button, Card, CardActions, CardContent, Stack, Typography,TextField } from '@mui/material'
import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useEffect } from 'react';
import studioSample from '../assets/herostudio.jpg';
import { sample_data } from '../Utils/SampleData';
import {createfeedback,getFeedbacks} from '../controllers/controller'
import { NavLink } from 'react-router-dom'
import InstrumentCard from '../components/InstrumentCard';

const StudioDetailPage = () => {

    const {id}=useParams();
    
    const [newdata,setnewData]=useState(sample_data[id-1]);
   const[feedbackData,setFeedbackData]=useState([]);
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

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getFeedbacks();
          setFeedbackData(data);
          
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);


    const handlefeedbacks = async () => {
      console.log({id})
      try {
        const user = await createfeedback(id,feedbackData);
        
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
    const cardStyle = {
      border: '1px solid gray',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '750px',
    };
    
    const containerStyle = {
      
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '20px',
      
    };

  return (
    <>
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
            <NavLink to="/book">
                <p>Book</p>
           </NavLink>
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
      <Button variant="contained" color="primary" onClick={() => handlefeedbacks(id)} >
        Add
      </Button>
    </Box>

    
    
      
     
      
    </Stack>
    <div style={containerStyle} >
    {feedbackData.map((detail,index) => (
     <div style={cardStyle} key={index}>

     <p key={detail._id}>{detail.stuidoID} <span>  {detail.feedbacks}</span></p>
   </div>
   ))}
 </div>
 </>
   
    
  );
}

export default StudioDetailPage