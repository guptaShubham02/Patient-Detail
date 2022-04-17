import React from "react";

import {
  CalendarMonth,
  Close,
  FormatListBulleted,
  HelpOutline,
  MessageRounded,
  PaidRounded,
  Person,
  SettingsInputComponentRounded,
  Speed,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Doctors from "./Doctors";

const MenuList = ({ onClick,menuHandler }) => {
  return (
    <>
      <nav aria-label="main mailbox folders">
        <List className="Menubar-top">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
              <IconButton
                size="large"
                edge="end"
                aria-label="menu"
                sx={{ mr: 2, color: "#0044E9" }}
                onClick={() => menuHandler(false)}
              >
                <Close />
              </IconButton>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Speed />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText primary="Calender" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ background: "#0D53FC", color: "#fff" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Person sx={{ color: "whitesmoke" }} />
              </ListItemIcon>
              <ListItemText primary="Patient List" onClick={onClick} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MessageRounded />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaidRounded />
              </ListItemIcon>
              <ListItemText primary="Payment information" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsInputComponentRounded />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding sx={{ color: "#424242" }}>
            <ListItemButton>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <ListItemText primary="Help ?" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <Doctors />
          </ListItem>
        </List>
      </nav>
    </>
  );
};

export default MenuList;
