import { PersonOutlineOutlined } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Notes = () => {
  return (
    <Grid>
      <Card sx={{ padding: "12px", mt: 4, mr: 3 }}>
        <div>
          <Typography variant="h6" sx={{ display: "inline-block" }}>
            Notes
          </Typography>
          <Button sx={{ textAlign: "right", paddingLeft: "150px" }}>
            See All
          </Button>
        </div>
        <CardContent sx={{ background: "#EFF1F7",minHeight:'200px', position:'relative' }}>
          <Typography variant="subtitle1" sx={{paddingBottom:'7px'}}>- Lorem ipsum dolor sit amet consectetur .</Typography>
          <Typography variant="subtitle1" sx={{paddingBottom:'7px'}}>- Lorem ipsum dolor sit  consectetur .</Typography>
          <Typography variant="subtitle1" sx={{paddingBottom:'7px'}}>- Lorem ipsum dolor consectetur .</Typography>
          <Button variant="contained" sx={{position:'absolute',bottom:'10px',right:'10px'}}>Save note</Button>
        </CardContent>
        <Grid container>
            <Grid item >
                <Typography variant="subtitle1" sx={{m:2}}>
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="subtitle1" component='span'>
                    <PersonOutlineOutlined sx={{color:'#0D53FC'}} />
                   &nbsp; Drg. Mega Nonode
                </Typography>
                <Typography variant="subtitle1" component='span' sx={{display:'inline-block', textAlign:'right',width:'150px'}}>
                    20 Nov '19
                </Typography>
            </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Notes;
