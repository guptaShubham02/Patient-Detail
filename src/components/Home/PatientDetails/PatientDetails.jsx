import React from "react";

import PatientInformation from "./PatientInformation/PatientInformation";

import { Grid } from "@mui/material";
import "./PatientDetails.scss";
import Navbar from "./Navbar/Navbar";
import Keep from "./Keep/Keep";

const PatientDetails = ({ findPatient,patientHome,showMenuHandler }) => {
  return (
    <Grid item className="PatientDetails" xs={12}>
      <Navbar findPatient={findPatient} patientHome={patientHome} showMenuHandler={showMenuHandler}/>
      <Grid container>
        <PatientInformation findPatient={findPatient} />
        <Keep/>
      </Grid>
    </Grid>
  );
};

export default PatientDetails;
