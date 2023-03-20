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
const drawerWidth = 200;



// Item styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: '0.2rem'theme.spacing(0.1),
  padding: '0.2rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  size: '0.5rem',
}));
export default function CampaignBanner(){
   return   (<><AppBar
   position="sticky"
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
    <Typography style={{ padding: '0.25em', color:'black',fontSize: '0.75rem', }}>
        Launch 'Chart your Course'-Personalized travel pacakges
    </Typography>
    <Stack direction="row" spacing={2}>
  <Item>Announcement</Item>
  <Item>Digital Marketing</Item>
   <Item> Location <LocationOnIcon fontSize="small"/> </Item>
   
    
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
          m: 0.5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
    <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ height: "40px", width: "40px", margin: "auto", padding: "0" }}
/>

<Stack direction="column" spacing={0.5}>
 <Typography style={{ padding: '0.2em', color:'black',fontSize: '0.5rem', }}><b>Amelia Burrows</b></Typography>
 <Typography style={{ padding: '0.2em', color:'black',fontSize: '0.5rem', }}>burrows@gmail.com</Typography>
    
</Stack>
</Box>
  </Grid>
  <Divider orientation="vertical" flexItem />
  <Grid item xs={2} md={2}>
 
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