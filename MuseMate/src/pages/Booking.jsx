import {  Grid, TextField, Button, Card, CardContent, Typography,MenuItem   } from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from '@mui/styles';





export default function Booking() {

    return (
   
    
      <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        museMate
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form to book your studio
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="date"  label="Date" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField type="time"   variant="outlined" fullWidth required>
                    <MenuItem value="am">am</MenuItem>
                    <MenuItem value="pm">pm</MenuItem>
                    </TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                <TextField type="time"   variant="outlined" fullWidth required>
                  <MenuItem value="am">am</MenuItem>
                  <MenuItem value="pm">pm</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text" label="cost" variant="outlined" fullWidth required />
                </Grid>

                
                <Grid item xs={12}>
                  <TextField type="text" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
         
    );
  }

