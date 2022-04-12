import { Grid } from "@mui/material";
import React from "react";
import Cards from "./Card/Cards";
import Details from "./Details/Details";
import Modal from "../../../../UI/Modal";
import Appoinment from "./Appoinment/Appoinment";

const Profile = ({ findPatient }) => {
  return (
    <Modal>
      <Grid container spacing={1} sx={{ m: 3 }}>
        <Cards findPatient={findPatient} />
        <Details findPatient={findPatient} />
        <Appoinment />
      </Grid>
    </Modal>
  );
};

export default Profile;
