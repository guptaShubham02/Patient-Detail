import { Grid } from "@mui/material";
import React from "react";
import Cards from "./Card/Cards";
import Details from "./Details/Details";
import Appoinment from "./Appoinment/Appoinment";

const Profile = ({ findPatient }) => {
  return (
      <Grid container spacing={1} sx={{ p: 3 }}>
        <Cards findPatient={findPatient} />
        <Details findPatient={findPatient} />
        <Appoinment />
      </Grid>
  );
};

export default Profile;
