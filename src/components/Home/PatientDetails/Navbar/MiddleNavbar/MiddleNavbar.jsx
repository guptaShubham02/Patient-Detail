import React from "react";

import {
  Grid,
  Link,
  Typography,
  Breadcrumbs,
  Stack,
  Button,
} from "@mui/material";
import { ModeEdit, Print } from "@mui/icons-material";

const MiddleNavbar = ({ findPatient, patientHome }) => {
  function handleClick(event) {
    event.preventDefault();
    patientHome();
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="primary"
      href="/"
      onClick={handleClick}
    >
      Patient List
    </Link>,
    <Typography key="3" color="text.primary">
      {findPatient.name}
    </Typography>
  ];

  return (
    <Grid container my={2} ml={3} spacing={1}>
      <Grid item xs={9}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ fontSize: "1.5rem" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Grid>
      <Grid item xs={1} sx={{ textAlign: "right" }}>
        <Button sx={{ background: "white", padding: "1" }}>
          <Print />
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button sx={{ background: "white", padding: "1" }}>
          <ModeEdit />
          Edit Patient
        </Button>
      </Grid>
    </Grid>
  );
};

export default MiddleNavbar;
