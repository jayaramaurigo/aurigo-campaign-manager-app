import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Badge from '@mui/material/Badge';

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  return (
   <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List dense>
            <ListItem>
                <ListItemText primaryTypographyProps={{color:'#4EBCF6', fontSize:'15px', fontWeight:500}} primary="Overview" />
            </ListItem>
            {['To-Do List', 'Resources', 'Discussions'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                
                    <ListItemText primaryTypographyProps={{fontSize: '14px'}} primary={text}/>
                    <Badge badgeContent={index+1} sx={{color:'black'}}/>
                </ListItemButton>
                </ListItem>
            ))}
        </List>
        <List dense>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primaryTypographyProps={{fontSize: '15px', fontWeight:600}} primary="Activities" />
                    <ListItemIcon sx={{justifyContent:'flex-end'}}>
                        <AddCircleOutlineIcon fontSize='inherit'/>
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            {['Email Campaign', 'Social Posts', 'Surveys', 'Events', 'Webinars', 'SMS Campaigns', 'Blogs', 'Video'].map((text, index)=> 
            (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                      <ListItemText primaryTypographyProps={{fontSize: '14px'}} primary={text} />
                      <Badge badgeContent={index+1} sx={{color:'black'}}/>
                  </ListItemButton>
                </ListItem>
            ))}
        </List>
      </Drawer>
    </>
  );
}