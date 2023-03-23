import React from "react";

import NavBar from "./NavBar";
import Activities from "./ActivitiesList";
import PendingTasks from "./PendingTasks";
import { Box } from "@mui/system";
import CampaignBanner from "./CampaignBanner";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import TimeLine from "./TimeLine";
import BasicCard from "./EventCardTemplate";
export default function Homepage(){
  return(
    // <Box  sx={{
    //   display: 'flex',
    //   alignItems: 'flex-start',
    //   flexDirection: 'row',
    //   p: 0.75,
    //   m: 0.5,
    //   bgcolor: 'background.paper',
    //   borderRadius: 1,
    // }}>
    //   <CssBaseline />
    //   <CampaignBanner/>
    //   <NavBar/>
    //   <Box>
    //     <Toolbar />
        
    //     <Grid container  spacing={2}>
    //       <Grid item xs={6}>
    //         <Grid item xs={12} height={'100%'}>
    //           {/* <Activities/> */}
    //           <TimeLine/>
    //         </Grid>
    //       </Grid>
    //       <Grid item md={6}>
    //         <Grid item  xs={2} md={12}> 
    //           <Activities/>
    //         </Grid>
    //         <br></br>
    //         <Grid item xs={2} md={12}>
    //           <PendingTasks/>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Box>
    <BasicCard/>
)};