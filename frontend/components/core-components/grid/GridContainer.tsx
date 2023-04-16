import React from "react";
import Grid from "@mui/material/Grid";

interface ITypesGrid {
  spacing?: number;
  children?: React.ReactNode;
}

// learn more on grid here : https://mui.com/material-ui/react-grid/
const GridContainer = ({ children, spacing }: ITypesGrid) => {
  return (
    <Grid
      sx={{ margin: "0 -15px", width: "calc(100% + 30px)" }}
      container
      spacing={spacing}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
