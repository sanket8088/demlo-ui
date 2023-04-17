import React from "react";
import Grid from "@mui/material/Grid";

interface ITypesGridItem {
  xs?: number;
  children?: React.ReactNode;
  paddingBottom?: string;
}

// learn more on grid here : https://mui.com/material-ui/react-grid/
const GridItem = ({ children, xs, paddingBottom }: ITypesGridItem) => {
  const spacingBottom = paddingBottom ? paddingBottom : "0px";
  return (
    <Grid sx={{ padding: "0 15px", paddingBottom: spacingBottom }} item xs={xs}>
      {children}
    </Grid>
  );
};

export default GridItem;
