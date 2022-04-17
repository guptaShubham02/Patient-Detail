import { Grid } from "@mui/material";
import React from "react";
import Document from "./Document/Document";
import Notes from "./Notes/Notes";
import './Keep.scss';

const Keep = () => {
  return (
    <Grid item lg={4} md={12} sm={12} sx={{mb:2}}>
      <Grid container className='keep'>
        <Notes />
        <Document />
      </Grid>
    </Grid>
  );
};

export default Keep;
