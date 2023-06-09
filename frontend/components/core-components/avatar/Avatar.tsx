import * as React from "react";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";

interface AvatarProps {
  id: number;
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    cursor: "pointer",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars({
  id,
  name,
  onClick,
  imageUrl,
  isSelected,
}: AvatarProps) {
  return (
    <Stack
      direction="row"
      sx={{
        width: "110px",
        height: "110px",
        display: "flex",
        marginTop: "15px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Badge
        onClick={() => onClick(id)}
        overlap="circular"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        badgeContent={
          isSelected ? (
            <DoneIcon
              sx={{
                fontSize: "1.6rem",
                color: "#fff",
                padding: "5px",
                borderRadius: "50%",
                background:
                  "radial-gradient(84.28% 51.82% at 51.28% 4.93%, rgba(226, 255, 254, 0.5) 0%, rgba(226, 255, 254, 0) 100%), #51CDDE",
                boxShadow: "0px 8px 10px rgba(81, 205, 222, 0.14)",
              }}
            />
          ) : null
        }
      >
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
          }}
          alt={name}
          src={imageUrl}
        />
      </Badge>
    </Stack>
  );
}
