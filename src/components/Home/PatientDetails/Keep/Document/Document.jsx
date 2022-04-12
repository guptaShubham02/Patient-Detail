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
import { Scrollbars } from "react-custom-scrollbars-2";

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
  const newData = showDocument[1];
  const newData2 = showDocument[2];
  const newData3 = showDocument[3];

  return (
    <Grid>
         <Scrollbars style={{ width: '100%', height: 300 }}>
      <Card
        sx={{
          padding: "12px",
          mt: 4,
          mr: 3,
          height: "255px",
          overflow: "auto",
        }}
      >
        <div>
          <Typography variant="h6" sx={{ display: "inline-block" }}>
            Files/Documents
          </Typography>
          <Button sx={{ textAlign: "right", paddingLeft: "100px" }}>
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
            >
              <ListItemAvatar>
                <ListItemIcon>
                  <StickyNote2Outlined />
                </ListItemIcon>
              </ListItemAvatar>
              <ListItemText
                primary={`${newData.name.split(" ").join("")}.pdf`}
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
            >
              <ListItemAvatar>
                <ListItemIcon>
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
            <ListItem secondaryAction="123kb">
              <ListItemAvatar>
                <ListItemIcon>
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
      </Scrollbars>
    </Grid>
  );
};

export default Document;
