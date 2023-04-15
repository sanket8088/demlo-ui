import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function InterestAreaCard() {
  return (
    <Card
      sx={{
        padding: '10px',
        maxWidth: '200px',
        maxHeight: '150px',
        borderRadius: '7px',
        background:
          'linear-gradient(to bottom right, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(21px)',
      }}
    >
      <CardActionArea
        sx={{
          maxHeight: '130px',
        }}
      >
        <CardMedia
          sx={{ borderRadius: '7px' }}
          component="img"
          height="80"
          image="https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148973052.jpg"
          alt="green iguana"
        />
        <CardContent
          sx={{
            color: '#fff',
            padding: '5px',
            margin: '0px',
            height: '70px',
          }}
        >
          <Typography
            sx={{ color: '#fff', fontSize: '10px' }}
            gutterBottom
            component="div"
          >
            Science
          </Typography>
          <Typography sx={{ color: '#fff', fontSize: '8px' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
