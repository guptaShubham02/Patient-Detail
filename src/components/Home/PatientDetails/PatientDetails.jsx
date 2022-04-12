import React from "react";

import PatientInformation from "./PatientInformation/PatientInformation";

import { Grid } from "@mui/material";
import "./PatientDetails.scss";
import Navbar from "./Navbar/Navbar";
import Keep from "./Keep/Keep";

const PatientDetails = ({ findPatient,patientHome }) => {
  return (
    <Grid item className="PatientDetails" xs={10}>
      <Navbar findPatient={findPatient} patientHome={patientHome} />
      <Grid container>
        <PatientInformation findPatient={findPatient} />
        <Keep/>
      </Grid>
    </Grid>
  );
};

export default PatientDetails;
