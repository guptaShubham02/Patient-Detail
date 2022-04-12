import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  Avatar,
  Grid,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@mui/material";

const Doctors = () => {
  const [drList, setDrList] = useState([]);
  const [name, setName] = React.useState("");

  useEffect(() => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((repos) => {
        const allRepos = repos.data;
        if (allRepos.length === 0) {
          return;
        }
        setDrList(allRepos);
      });
  }, []);

  const notEmpty = drList.toString().length === 0 ? "add Some data" : drList;


  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Grid container>
      <Grid item sx={{ width: "100%" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="doctors">Doctors List</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Doctors List"
              onChange={handleChange}
            >
              {drList.map((data) => (
                <MenuItem value={data.name} id={data.name} key={data.name}>
                  <ListItemAvatar>
                    <Avatar>{data.name.slice(0,1)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    id={data.name}
                    primary={data.name}
                    secondary="Dentist"
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Doctors;
