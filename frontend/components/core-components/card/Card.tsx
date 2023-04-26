import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface CardProps {
  id: number;
  title: string;
  img_url: string;
  discription: string;
  onClick: (subject: { id: number; title: string; img_url: string }) => void;
}

export default function InterestAreaCard({
  id,
  title,
  img_url,
  onClick,
  discription,
}: CardProps) {
  return (
    <Card
      onClick={() => onClick({ id, title, img_url })}
      sx={{
        padding: '10px',
        maxWidth: '200px',
        maxHeight: '150px',
        borderRadius: '7px',
        background:
          'linear-gradient(to bottom right, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(21px)',
        marginBottom: '10px',
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
          image={img_url}
          alt={title}
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
            {title}
          </Typography>
          <Typography sx={{ color: '#A5A5A5', fontSize: '8px' }}>
            {discription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
