import React from "react";
import Avatar from "@mui/material/Avatar";

interface ITypesCustomAvatar {
  src?: string;
  width: number;
  height: number;
}
const CustomAvatar = ({ src, width, height }: ITypesCustomAvatar) => {
  return (
    <Avatar alt="Remy Sharp" src={src} sx={{ width: width, height: height }} />
  );
};

export default CustomAvatar;
