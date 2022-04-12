import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Menubar from "./Menubar/Menubar";
import "./Home.scss";
import PatientDetails from "./PatientDetails/PatientDetails";
import PatientList from "./Menubar/PatientList/PatientList";
import axios from "axios";

const Home = () => {
  const [showPatients, setShowPatients] = useState(true);
  const [patientDetails, setPatientDetails] = useState([]);
  const [loadPatient, setLoadPatient] = useState([]);

  useEffect(() => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((repos) => {
        const allRepos = repos.data;
        if (allRepos.length === 0) {
          return;
        }
        setLoadPatient(allRepos);
      });
  }, []);

  const patientListHandler = () => {
    setShowPatients(true);
  };

  const patientDetailsHandler = (index) => {
    if (patientDetails.indexOf(index) !== -1) return;
    setPatientDetails([index]);
    setShowPatients(false);
  };

  const findPatient = loadPatient[patientDetails];


  return (
    <>
      <div className="main">
        <Grid container className="body">
          <Menubar onClick={patientListHandler} />

          {showPatients ? (
            <PatientList
              patientDetailsHandler={patientDetailsHandler}
            />
          ) : (
            <PatientDetails
              findPatient={findPatient}
              patientHome={patientListHandler}
            />
          )}
        </Grid>
      </div>
    </>
  );
};

export default Home;
