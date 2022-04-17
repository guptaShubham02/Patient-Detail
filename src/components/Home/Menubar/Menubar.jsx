import React from "react";

import { Grid } from "@mui/material";
import "./Menubar.scss";
// import Doctors from "./Doctors";
import MenuList from "./MenuList";
import Modal from "../../UI/Modal";

const Menubar = ({ onClick, menuHandler }) => {
  return (
    <Modal menuHandler={menuHandler}>
      <MenuList onClick={onClick} menuHandler={menuHandler} />
    </Modal>
  );
};

export default Menubar;
