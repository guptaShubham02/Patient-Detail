import {
  Notifications,
  PersonOutlineOutlined,
  Search,
} from "@mui/icons-material";
import { Grid, Typography, Button, Badge } from "@mui/material";
import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./TopNavbar.scss";

const TopNavbar = ({findPatient}) => {
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={7}>
          <Typography>
            <Button variant="h4" sx={{ fontSize: "25px", fontWeight: "500" }}>
              <PersonOutlineOutlined
                color="primary"
                sx={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  paddingRight: "5px",
                }}
              />
             {findPatient.name}
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Form className="d-flex search-box">
            <Search />
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%",
              minWidth: "45px",
              background: "#0044E9",
              fontSize: "23px",
              lineHeight: "1",
              marginLeft: "20px",
            }}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button sx={{padding:'0px'}}>
            <Badge
              color="error"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              sx={{
                background: "#eeeeee",
                borderRadius: "50%",
                padding: "8px",
              }}
            >
              <Notifications />
            </Badge>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TopNavbar;
