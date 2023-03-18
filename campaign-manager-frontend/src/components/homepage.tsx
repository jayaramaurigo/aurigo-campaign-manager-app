import React from "react";

import NavBar from "./NavBar";
import Activities from "./ActivitiesList";
import PendingTasks from "./PendingTasks";
import { Box } from "@mui/system";
import CampaignBanner from "./CampaignBanner";

export default function Homepage(){
    return <>HomePage
    <Box>
        <NavBar/>
    </Box>
    {/* <Box>
        <CampaignBanner/>
    </Box>
    <Box>
        <Activities/>
        <br/>
        <PendingTasks/>
    </Box> */}
    </>;
};