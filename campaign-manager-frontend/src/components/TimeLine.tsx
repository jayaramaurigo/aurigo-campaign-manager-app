import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CampaignIcon from '@mui/icons-material/Campaign';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import Typography from '@mui/material/Typography';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Card, CardContent, CardHeader, Chip, Icon, IconButton, Stack } from '@mui/material';
import { borderColor, borderRadius } from '@mui/system';

function createData(
    type: string,
    title: string,
    isHead: boolean,
    subTitle: string, 
    pendTask: number,
    createdBy: string,
    publishedBy: string,
    status: string,
    // icon: string,
    // channels: string
) {
    // return { type, title, isHead, subTitle, pendTask, createdBy, publishedBy, icon, channels, status};
    return { type, title, isHead, subTitle, pendTask, createdBy, publishedBy, status};
}

const cardInfo=[
    createData("", "Launch 'Chart Your Course'-Personalized travel packages has started", true, "", 0, "", "", ""),
    createData("EMAIL CAMPAIGN", "Zylker Travels App Launch", false, "subTitle", 2, "Amelia Burrows", "Amelia Burrows", "SENT"),
    createData("SOCIAL POST", "Not able to ...", false, "subTitle", 2, "Amelia Burrows", "Amelia Burrows", "PUBLISHED"),
    createData("SOCIAL POST", "Book your trip now...", false, "subTitle", 2, "Amelia Burrows", "Amelia Burrows", "PUBLISHED"),
    createData("SOCIAL POST", "Why choose Zylker Travels?", false, "subTitle", 2, "Amelia Burrows", "Amelia Burrows", "PUBLISHED"),
]

const iconList=[

]

export default function TimeLine() {
    return(
        <Timeline 
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
                },
            }}
        >
            {cardInfo.map((card)=>(
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor:'black'}}/>
                            <TimelineDot sx={{backgroundColor:'white', outlineColor:'black'}}>
                                <CampaignIcon fontSize='small' sx={{color:'orange'}}/>
                            </TimelineDot>
                        <TimelineConnector sx={{backgroundColor:'black'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        {card.isHead?(
                            <Card sx={{ minWidth: 200, borderLeft: 2, borderRadius:'0px', borderLeftColor:'orange'}} style={{backgroundColor:'#fdf7ed'}}>
                                <CardContent>
                                    <Typography sx={{fontSize: '1.1rem'}} component='div'>
                                        <strong>{card.title}</strong>        
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                        :
                        (
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: '0.8rem', color:'grey', mb:0.7}}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={6}
                                    >
                                        <span>{card.type}</span>
                                        <Chip label={card.status} variant="outlined" size='small' sx={{borderRadius:1.5, color:'#32de84', borderColor:'grey'}}/>
                                    </Stack>
                                    </Typography>
                                    <Typography sx={{ mb: 0.7, fontSize: '1.1rem'}} component='div'>
                                        <strong>{card.title}</strong>        
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={6}
                                    >
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            component='div' 
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            }}
                                        > 
                                            <DescriptionOutlinedIcon fontSize='small'/>
                                            <span>Pending Tasks: {card.pendTask}</span>      
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            component='div' 
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            }}
                                        > 
                                            <PersonOutlinedIcon fontSize='small'/>
                                            <span>Created By: {card.createdBy}</span>      
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            component='div' 
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            }}
                                        > 
                                            <PersonOutlinedIcon fontSize='small'/>
                                            <span>Published By: {card.publishedBy}</span>      
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            component='div' 
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            }}
                                        > 
                                            <ShareOutlinedIcon fontSize='small'/><span>Channels: {/*{card.channels}*/}</span>
                                            <IconButton><FacebookRoundedIcon fontSize='small' sx={{color:'#425894'}}/></IconButton>
                                            <IconButton><InstagramIcon fontSize='small' sx={{color:'#d75176'}}/></IconButton>
                                            <IconButton><TwitterIcon fontSize='small' sx={{color:'#4da9e7'}}/></IconButton>    
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        )}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}