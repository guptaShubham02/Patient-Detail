import React from "react";

import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Card,
} from "@mui/material";

const Cards = ({findPatient}) => {
  return (
    <Grid item md={5} xs={12} sx={{ textAlign: "center", width:'100%' }}>
      <Card sx={{ padding: "20px" }}>
        <CardMedia
          component="img"
          sx={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            mx: "auto",
            mt:1,
          }}
          image="https://media.istockphoto.com/photos/macro-shot-of-female-eye-iris-cropped-on-black-background-usable-as-picture-id1312083976?s=612x612"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {findPatient.name}
          </Typography>
          <Typography variant="section1" color="text.secondary">
            {`${findPatient.name.split(' ').join('')}@example.com`}
          </Typography>
        </CardContent>
        <CardContent sx={{ padding: "0" }}>
          <Grid container>
            <Grid item xs={6} sx={{borderRight:'1px solid #c4c4c4'}}>
              <Typography variant="h5" component="div">
                {findPatient.Past}
              </Typography>
              <Typography variant="section1" color="text.secondary">
                Past
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" component="div">
                {findPatient.Upcoming}
              </Typography>
              <Typography variant="section1" color="text.secondary">
               Upcoming
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            sx={{ color: "black", borderColor: "#c4c4c4 !important", mx: "auto",width:'100%' }}
          >
            Send Message
          </Button>
        </CardActions>
      </Card>
      
    </Grid>
  );
};

export default Cards;
