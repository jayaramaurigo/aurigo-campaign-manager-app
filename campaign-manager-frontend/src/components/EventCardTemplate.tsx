import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, CardMedia } from '@mui/material';

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           benevolent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

const MoreDeets = () => {
    const cardInfo = [
      {
        title: "Lebron James",
        isHead: true,
        subTitle: "", 
        text: "THE GOAT",
      },
      {
        title: "Alex Caruso",
        isHead: false,
        subTitle: "hello moto",
        text: "THE TRUE GOAT",
      },
      {
        title: "Steph Curry",
        isHead: false,
        subTitle: "hello moto",
        text: "he good",
      },
      {
        title: "Michael Jordan",
        isHead: false,
        subTitle: "hello moto",
        text: "he is very close to goat",
      },
    ];
  
    const renderCard = (card: { title: string; isHead: any; subTitle: string; text: string;}, index: React.Key | null | undefined) => {
      return (
        card.isHead?(
            <Card style={{ width: "18rem" }} key={index} className="box">
                <CardHeader title={card.title}/>
                <CardContent>
                    {card.text}
                </CardContent>
            </Card>
        )
        :
        (
            <Card style={{ width: "18rem" }} key={index} className="box">
                <CardHeader title={card.title}/>
                <CardContent>
                    <Typography variant='h5'>
                        {card.subTitle}
                    </Typography>
                </CardContent>
                <CardContent>
                    {card.text}
                </CardContent>
            </Card>
        )
      );
    };
  
    return <div className="grid">{cardInfo.map(renderCard)}</div>;
  };
  
export default MoreDeets;