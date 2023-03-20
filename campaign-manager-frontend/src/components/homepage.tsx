import React from "react";

import NavBar from "./NavBar";
import Activities from "./ActivitiesList";
import PendingTasks from "./PendingTasks";
import { Box } from "@mui/system";
import CampaignBanner from "./CampaignBanner";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
export default function Homepage(){
    return <>
     <Box  sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        p: 0.75,
        m: 0.5,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}>
        

   
        <CampaignBanner/>
        <CssBaseline />
        <NavBar/>
 
    <Grid container spacing={2}>
    <Grid item xs={2} md={6}> 
    <Activities/>
      </Grid>
      <Grid item xs={2} md={6}>
      <PendingTasks/>
     </Grid>
    </Grid>
       
    </Box>

    </>
};