import {  TextField,Box,Button  } from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from '@mui/styles';




export default function Booking() {
  
 



const useStyles = makeStyles((theme) => ({
  container: {
    marginTop:'20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
   // marginBottom: theme.spacing(1)
   marginBottom:'20px'
    
  }
}));
  

  // const [formData, setFormData] = useState({
  //   name: "",
  //   mobile: "",
  //   studio: "",
  //   date: "",
  //   timeslot:""
  // });
  // const handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  
  const classes = useStyles();
 
    return (
   
    
      
      <Box className={classes.container}>
        <form  className={classes.form}>
          <TextField className={classes.textField} label="ClientName" variant="outlined" />
          <TextField className={classes.textField} label="StudioName" variant="outlined" />
          <TextField type="date" className={classes.textField} label="StudioName" variant="outlined" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>

        
        </form>
      </Box>

         
    );
  }

