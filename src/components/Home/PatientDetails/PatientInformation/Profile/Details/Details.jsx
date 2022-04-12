import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Details = ({findPatient}) => {
  const newData = (Object.values(findPatient));
  return (
    <Grid item xs={7} sx={{ textAlign: "center" }}>
      <Card sx={{ padding: "9px" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                Gender
              </Typography>
              <Typography variant="subtitle1">{findPatient.Gender?`${findPatient.Gender}`:'N/A'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                Birthday
              </Typography>
              <Typography variant="subtitle1">{findPatient.Birthday?`${findPatient.Birthday}`:'N/A'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                Phone Number
              </Typography>
              <Typography variant="subtitle1">{newData[6]?`${newData[6]}`:'N/A'}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ padding: "9px" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                Street Address
              </Typography>
              <Typography variant="subtitle1">{newData[7]?`${newData[7]}`:'N/A'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                City
              </Typography>
              <Typography variant="subtitle1">{newData[7]?`${newData[7]}`:'N/A'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
               ZIP Code
              </Typography>
              <Typography variant="subtitle1">{newData[8]?`${newData[8]}`:'N/A'}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ padding: "9px" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                Member Status
              </Typography>
              <Typography variant="subtitle1">{newData[9]?`${newData[9]}`:'N/A'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="section2" color="text.secondary">
                Registered Date
              </Typography>
              <Typography variant="subtitle1">{newData[10]?`${newData[10]}`:'N/A'}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Details;
