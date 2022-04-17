import React, { useEffect, useState } from "react";

import {
  AddCircle,
  Delete,
  DownloadForOfflineOutlined,
  DownloadingOutlined,
  StickyNote2Outlined,
} from "@mui/icons-material";
import {
  Button,
  Card,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import './Document.scss'

const Document = () => {
  const [showDocument, setShowDocument] = useState();

  useEffect(() => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((repos) => {
        const allRepos = repos.data;
        if (allRepos.length === 0) {
          return;
        }
        setShowDocument(allRepos);
      });
  }, []);

  if (showDocument == null || showDocument === 0) {
    return;
  }
  const newData2 = showDocument[2];
  const newData3 = showDocument[3];

  return (
    <Grid item md={6} lg={12} sm={6} xs={12}>
        <Card
          sx={{
            padding: "12px",
            mt: 4,
            mx:2,
            height: "255px",
            overflow: "auto",
          }}
          className='documentBody'
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Files/Documents</Typography>
            <Button sx={{ textAlign: "right" }}>
              <AddCircle />
              Add files
            </Button>
          </div>
          <Card sx={{ mb: 2 }}>
            <List>
              <ListItem
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DownloadForOfflineOutlined />
                    </IconButton>
                  </>
                }
                sx={{ pr: "0px", pl: "6px" }}
              >
                <ListItemAvatar sx={{ minWidth: "40px" }}>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <StickyNote2Outlined />
                  </ListItemIcon>
                </ListItemAvatar>
                <ListItemText
                  primary={`${newData3.name.split(" ").join("")}.pdf`}
                />
              </ListItem>
            </List>
          </Card>
          <Card sx={{ mb: 2 }}>
            <List>
              <ListItem
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DownloadingOutlined sx={{ color: "#0D53FC" }} />
                    </IconButton>
                  </>
                }
                sx={{ pr: "0px", pl: "6px" }}
              >
                <ListItemAvatar sx={{ minWidth: "40px" }}>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <StickyNote2Outlined />
                  </ListItemIcon>
                </ListItemAvatar>
                <ListItemText
                  primary={`${newData2.name.split(" ").join("")}.pdf`}
                />
              </ListItem>
            </List>
          </Card>
          <Card>
            <List>
              <ListItem secondaryAction="123kb" sx={{ pr: "0px", pl: "6px" }}>
                <ListItemAvatar sx={{ minWidth: "40px" }}>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <StickyNote2Outlined />
                  </ListItemIcon>
                </ListItemAvatar>
                <ListItemText
                  primary={`${newData3.name.split(" ").join("")}.pdf`}
                />
              </ListItem>
            </List>
          </Card>
        </Card>
    </Grid>
  );
};

export default Document;
