import React from "react";

import NavBar from "./NavBar";
import Activities from "./ActivitiesList";
import PendingTasks from "./PendingTasks";
import { Box } from "@mui/system";
import CampaignBanner from "./CampaignBanner";
export default function Homepage(){
    return <>HomePage
    <Box sx={{ display: 'flex',
    backgroundColor: 'white'
     }}>
    <NavBar/>
    <CampaignBanner/>
    <Activities/>
    <br/>
    <PendingTasks/>
    </Box>
    </>;
};