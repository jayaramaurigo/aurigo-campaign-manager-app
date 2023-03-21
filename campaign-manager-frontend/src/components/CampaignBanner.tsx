import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { wrap } from "module";
const drawerWidth = 200;




export default function CampaignBanner(){
   return   (<><AppBar

    position="fixed"
   sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'white'}}
 >
    <Toolbar disableGutters={true}>
  <Grid container spacing={0}>
  <Grid item xs={2} md={1}>
  <CalendarMonthIcon />
  </Grid>
  <Divider flexItem orientation="vertical" />
  <Grid item xs={4} md={6}>
  <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 0.5,
          m: 0.5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
    <Typography style={{ padding: '0.25em', color:'black',fontSize: '14px', }}>
       <b> Launch 'Chart your Course'-Personalized travel pacakges</b>
    </Typography>
    <Stack direction="row" spacing={0.5}>
      
        <CardContent  style={{ border: "1px solid grey",borderRadius: '5px', padding: 2,color:'black', backgroundColor:'#D0DEEE', fontSize: '12px' }}>Announcement</CardContent>
        <CardContent  style={{ border: "1px solid grey",borderRadius: '5px', padding: 2,color:'black', backgroundColor:'#D0DEEE', fontSize: '12px' }}>Digital Marketing</CardContent>
        <CardContent  style={{ border: "1px solid grey",borderRadius: '5px', padding: 2,color:'black', backgroundColor:'#D0DEEE', fontSize: '12px' }}> Location <LocationOnIcon sx={{height:'12px'}}/></CardContent>
   
    
</Stack>
  </Box>
  </Grid>
  <Divider flexItem orientation="vertical" />
  <Grid item xs={4} md={2}>
  <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          p: 0.2,
          paddingBottom: 0,
          m: 0.5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
    <Avatar
  alt="Aemy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ height: "40px", width: "40px", margin: "auto", padding: "0" }}
/>

<Stack direction="column" spacing={0.5}>
 <Typography  style={{ padding: '0.2em', color:'black',fontSize: '12px', }}><b>Amelia Burrows</b></Typography>
 <Typography style={{ padding: '0.2em', color:'black',fontSize: '10px', }}>burrows@gmail.com</Typography>
    
</Stack>
</Box>
  </Grid>
  <Divider orientation="vertical" flexItem />
  <Grid item xs={2} md={2.95}>
 
      <Button
         fullWidth={true}
        
        sx={{ color: '#74ff33', bgcolor: '#eeffe6', height: '1' }}
        aria-haspopup="true"
       
        variant="contained"
        disableElevation
       // onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Active
      </Button>
     


    </Grid>
  </Grid>

    </Toolbar>
 </AppBar>

 <Toolbar/>
 </>)
};