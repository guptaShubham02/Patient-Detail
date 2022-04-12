import {
  ExpandLess,
  ExpandMore,
  StickyNote2Outlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Appoinment = () => {
  const [open, setOpen] = useState(true);
  const [showAppoinment, setShowAppoinment] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((repos) => {
        const allRepos = repos.data;
        if (allRepos.length === 0) {
          return;
        }
        setShowAppoinment(allRepos);
      });
  }, []);

  if (showAppoinment == null || showAppoinment === 0) {
    return;
  }
  const newData = showAppoinment[0]["Upcoming Appointments"];
  const newData2 = showAppoinment[0]["Post Appointment"];

  return (
    <Grid
      item
      sx={{ background: "#fff", width: "92%", mt: 1, padding: "15px 10px" }}
    >
      <Box
        sx={{
          background: " #EFF1F7",
          borderRadius: "6px",
          p: "5px",
          display: "inline-block",
          mb: 2,
        }}
      >
        <ButtonGroup variant="" aria-label="outlined secondary button group">
          <Button sx={{ color: "#2B69FC", background: "#fff" }}>
            Upcoming Appoinments
          </Button>
          <Button sx={{ color: "#9AA4AD" }}>Past Appoinments</Button>
          <Button sx={{ color: "#9AA4AD" }}>Medical Records</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ background: "#F2F5FA", pt: 1 }}>
        <Grid container>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
          <ListItemButton
              sx={{ maxWidth: "400px", background: "#E9EBF0", textAlign:'center' }}
            >
              <ListItemText primary="Root Canal Treatment" />
             
            </ListItemButton>
          </Grid>
          <Grid item xs={6}>
            <ListItemButton
              onClick={handleClick}
              sx={{ maxWidth: "400px", background: "#fff" }}
            >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Show Previous Treatment" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </Grid>
        </Grid>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Grid container>
                <Grid item xs={2}>
                  {" "}
                  <ListItemText
                    primary={newData.Date}
                    secondary={newData.Time}
                  />
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <ListItemText
                    primary="Treatment"
                    secondary={newData.Treatment}
                  />
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <ListItemText primary="Dentist" secondary={newData.Dentist} />
                </Grid>
                <Grid item xs={2}>
                  {" "}
                  <ListItemText primary="Nurse" secondary={newData.Nurse} />
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ color: "#0C50F2", textAlign: "center" }}
                >
                  <Button>
                    <StickyNote2Outlined />
                    &nbsp; Note
                  </Button>
                </Grid>
              </Grid>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Grid container>
                <Grid item xs={2}>
                  {" "}
                  <ListItemText
                    primary={newData2.Date}
                    secondary={newData2.Time}
                  />
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <ListItemText
                    primary="Treatment"
                    secondary={newData2.Treatment}
                  />
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <ListItemText
                    primary="Dentist"
                    secondary={newData2.Dentist}
                  />
                </Grid>
                <Grid item xs={2}>
                  {" "}
                  <ListItemText primary="Nurse" secondary={newData2.Nurse} />
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ color: "#0C50F2", textAlign: "center" }}
                >
                  <Button>
                    <StickyNote2Outlined />
                    &nbsp; Note
                  </Button>
                </Grid>
              </Grid>
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
    </Grid>
  );
};

export default Appoinment;
