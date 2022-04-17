import {
  Notifications,
  PersonOutlineOutlined,
  Search,
  Menu,
} from "@mui/icons-material";
import { Grid, Typography, Button, Badge, IconButton } from "@mui/material";
import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./TopNavbar.scss";

const TopNavbar = ({ findPatient,showMenuHandler }) => {
  return (
    <>
      <Grid container mt={1} className="topNavbar">
        <Grid item sm={1} xs={1}>
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ mr: 2,color:'#0044E9' }}
            onClick={()=>showMenuHandler(true)}
          >
            <Menu />
          </IconButton>
        </Grid>
        <Grid item lg={6} md={5} sm={4} xs={8} className="topPatientName">
          <Typography>
            <Button
              variant="h4"
              sx={{ fontSize: "25px", fontWeight: "500", px: "10px" }}
              className="patientButton"
            >
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
        <Grid item lg={3} md={4} sm={5} className="searchBar">
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
        <Grid item lg={1} sm={1} xs={1} className="add">
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%",
              minWidth: "45px",
              background: "#0044E9",
              fontSize: "23px",
              lineHeight: "1",
            }}
          >
            +
          </Button>
        </Grid>
        <Grid item lg={1} sm={1} xs={1} className="notification">
          <Button sx={{ padding: "0px" }}>
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
