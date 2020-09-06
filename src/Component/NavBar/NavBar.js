import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import CommentIcon from "@material-ui/icons/Comment";
import MoreIcon from "@material-ui/icons/More";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignOutAlt,
  faCogs,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
    btn:{
      margin:'10px 20px'
    },
    typo:{
        margin: 'auto',
  },
  icons:{
    marginRight: '30px',
    fontSize: '30px'
    }
    
    
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.typo}>
            MY APP
          </Typography>
          <div>
            <Button className={classes.btn} color="primary" variant="contained">
              Login
            </Button>
            <Button className={classes.btn} color="primary" variant="contained">
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/home">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon className={classes.icons} />
                  Home
                </ListItemIcon>
                </ListItem>
              </Link>
            <Divider />

              <ListItem button>
                <ListItemIcon>
                  <CommentIcon className={classes.icons} />
                  Comment
                  </ListItemIcon>
              </ListItem>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <MoreIcon className={classes.icons} />
                More
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={classes.icons}
                />
                My Profile
              </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCogs} className={classes.icons} />
                Settings
              </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className={classes.icons}
                />
                Log Out
              </ListItemIcon>
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
     {props.children}

    </div>
  );
}
