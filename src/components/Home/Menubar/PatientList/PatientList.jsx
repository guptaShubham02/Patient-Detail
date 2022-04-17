import React, { useEffect, useState } from "react";

import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import axios from "axios";

const PatientList = ({ patientDetailsHandler}) => {
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

  return (
    <Grid
      item
      className="PatientDetails"
      xs={12}
      sx={{ overflow: "auto", height: "inherit" }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {loadPatient.map((data) => (
            <ListItem
              disablePadding
              key={data.name}
              onClick={() => {
                patientDetailsHandler(loadPatient.indexOf(data));
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Avatar>{data.name.slice(0, 1)}</Avatar>
                </ListItemIcon>
                <ListItemText primary={data.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Grid>
  );
};

export default PatientList;
