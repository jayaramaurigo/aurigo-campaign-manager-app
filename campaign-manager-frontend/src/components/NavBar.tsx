
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import ListSubheader from '@mui/material/ListSubheader';

const drawerWidth = 200;

export default function NavBar() {
  return (
    <Box sx={{ display: 'flex',
     }}>
      <CssBaseline />
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box-small',
          },
        
        }}
        
        variant="permanent"
        anchor="left"
      >
      

        <List
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            <span style={{ fontSize: "0.95rem", background: '#CCDEF4',
          backgroundColor: "#0431B4"}}>Over View</span>
            </ListSubheader>}>
          {['To-do Lists', 'Resources', 'Discussions'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText  ><span style={{ fontSize: "0.75rem" }}>{text}</span></ListItemText>
                
            <Badge
             badgeContent={index}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            />

              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
           <span style={{ fontSize: "0.95rem" }}>Activites</span>
            </ListSubheader>}>
          {[ 'Email Campaings', 'Social Posts', 'Surveys', 'Events', 'Webinars', 'SMS Campaings', 'Blogs', 'Video'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
              <ListItemText  ><span style={{ fontSize: "0.75rem" }}>{text}</span></ListItemText>
                <Badge
             badgeContent={index}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
       
      
    
 
      </Box>
    </Box>
  );
}
