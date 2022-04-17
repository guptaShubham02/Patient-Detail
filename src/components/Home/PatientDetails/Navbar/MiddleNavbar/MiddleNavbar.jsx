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
    <Grid container my={2} ml={0} spacing={1} sx={{width:'100%', paddingLeft:'1rem'}}>
      <Grid item lg={9} sm={7} md={8} xs={12}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ fontSize: "1.5rem",px:'0px' }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Grid>
      <Grid item lg={1} md={1} sm={1} xs={2} sx={{textAlign:'end'}}>
        <Button sx={{ background: "white", padding: "1" }}>
          <Print />
        </Button>
      </Grid>
      <Grid item lg={2} md={3} sm={4} xs={10} sx={{textAlign:'right', paddingLeft:'0px'}}>
        <Button sx={{ background: "white", padding: "1" }}>
          <ModeEdit />
          Edit Patient
        </Button>
      </Grid>
    </Grid>
  );
};

export default MiddleNavbar;
