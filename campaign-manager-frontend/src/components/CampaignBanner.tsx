import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
const drawerWidth = 200;
export default function CampaignBanner(){
   return   <AppBar
   position="fixed"
   sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'white'}}
 >
   <Toolbar>
     <Typography noWrap component="div" style={{ padding: '1em', color:'black' }} >
       Calendar
     </Typography>
   
   <Divider orientation="vertical" flexItem />
    <Typography style={{ padding: '1em', color:'black' }}>
        Launch 'Chart your Course'-Personalized travel pacakges
        <br/>
     <Typography noWrap component="div" style={{  padding: '1em', color:'black' }} >
              Announments Digital marketing 
     </Typography>
   
    </Typography>

    <Divider orientation="vertical" flexItem />

    <Box
            component="img"
            sx={{
            height: 40,
            }}
            alt="Your logo."
            src={'https://unsplash.it/40/40'}
        />
    </Toolbar>
 </AppBar>
};