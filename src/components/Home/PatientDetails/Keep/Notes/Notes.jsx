import React from "react";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import './Notes.scss';

const Notes = () => {
  return (
    <Grid item md={6} lg={12} sm={6} xs={12}>
      <Card sx={{ padding: "12px", mt: 4, mx: 2 }} className='notes'>
        <div>
          <Typography variant="h6" sx={{ display: "inline-block" }}>
            Notes
          </Typography>
          <Button sx={{ textAlign: "right", paddingLeft: "150px" }} className='seeAll'>
            See All
          </Button>
        </div>
        <CardContent
          sx={{
            background: "#EFF1F7",
            minHeight: "200px",
            position: "relative",
          }}
        >
          <Typography variant="subtitle1" sx={{ paddingBottom: "7px" }}>
            - Lorem ipsum dolor sit amet consectetur .
          </Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: "7px" }}>
            - Lorem ipsum dolor sit consectetur .
          </Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: "7px" }}>
            - Lorem ipsum dolor consectetur .
          </Typography>
          <Button
            variant="contained"
            sx={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Save note
          </Button>
        </CardContent>
        <Grid container sx={{ flexDirection: "column" }}>
          <Grid item>
            <Typography variant="subtitle1" sx={{ m: 1 }}>
              Lorem ipsum dolor sit amet.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid item>
                <Typography variant="subtitle1" component="span">
                  <PersonOutlineOutlined sx={{ color: "#0D53FC" }} />
                  &nbsp; Drg. Mega Nonode
                </Typography>
              </Grid>
              <Grid item className="notesDate">
                <Typography
                  variant="subtitle1"
                  component="span"
                  sx={{
                    display: "inline-block",
                    textAlign: "right",
                  }}
                >
                  20 Nov '19
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Notes;
