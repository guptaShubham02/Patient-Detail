import { Grid } from "@mui/material";
import React from "react";
import Document from "./Document/Document";
import Notes from "./Notes/Notes";

const Keep = () => {
  return (
    <Grid item xs={4}>
      <Notes />
      <Document />
    </Grid>
  );
};

export default Keep;
