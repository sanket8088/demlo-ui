import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    cursor: 'pointer',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars() {
  return (
    <Stack
      direction="row"
      sx={{
        width: '110px',
        height: '110px',
        display: 'flex',
        marginTop: '15px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        badgeContent={
          <DoneIcon
            sx={{
              fontSize: '1.6rem',
              color: '#fff',
              padding: '5px',
              borderRadius: '50%',
              background:
                'radial-gradient(84.28% 51.82% at 51.28% 4.93%, rgba(226, 255, 254, 0.5) 0%, rgba(226, 255, 254, 0) 100%), #51CDDE',
              boxShadow: '0px 8px 10px rgba(81, 205, 222, 0.14)',
            }}
          />
        }
      >
        <Avatar
          sx={{
            width: '100px',
            height: '100px',
          }}
          alt="Travis Howard"
          src="https://i.pinimg.com/474x/51/96/b3/5196b34be5aec2079e4b68190299a544.jpg"
        />
      </Badge>
    </Stack>
  );
}
