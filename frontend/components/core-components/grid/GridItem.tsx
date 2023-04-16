import React from "react";
import Grid from "@mui/material/Grid";

interface ITypesGridItem {
  xs?: number;
  children?: React.ReactNode;
}

// learn more on grid here : https://mui.com/material-ui/react-grid/
const GridItem = ({ children, xs }: ITypesGridItem) => {
  return (
    <Grid sx={{ padding: "0 15px" }} item xs={xs}>
      {children}
    </Grid>
  );
};

export default GridItem;
