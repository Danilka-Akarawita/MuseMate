import {  Stack, Typography } from '@mui/material'

import React from 'react'
import StudioCard from './StudioCard';
import StudioDesc from './StudioDesc';
import { sample_data } from '../Utils/SampleData';

const StudioHolder = () => {
    // const studioNames=["Studio 440","The Beat Lab","The Jam Pad","Tempo House"];
  return (
    <Stack width="100%" height="100vh" direction="column">
        <StudioDesc/>
        <Stack sx={{}} spacing={10} width="100%" direction={{xs:"column",sm:"column",md:"row",lg:"row"}}
        display="flex" alignItems="center" justifyContent="center" >
        {
            sample_data.map((item)=><StudioCard key={item.id} data={item}/>)
        }
        </Stack>
        {/*  */}
        {/* <StudioCard/> */}
    </Stack>
  )
}

export default StudioHolder