import React from "react";

import { Grid } from "@mui/material";
import "./Menubar.scss";
// import Doctors from "./Doctors";
import MenuList from "./MenuList";

const Menubar = ({onClick}) => {
  return (
    <Grid item xs={2} className="Menubar-section">
      <section>
      <MenuList onClick={onClick}/>
      </section>
    </Grid>
  );
};

export default Menubar;
