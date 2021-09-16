import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "react-responsive";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import Link from "@mui/material/Link";
import clsx from "clsx";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

const Navigation = () => {
  const intl = useIntl();

  const links = [
    {
      name: intl.formatMessage({ id: "Home-nav" }),
      endpoint: "/",
    },
    {
      name: intl.formatMessage({ id: "Information-nav" }),
      endpoint: "/information",
    },
    {
      name: intl.formatMessage({ id: "FAQ-nav" }),
      endpoint: "/faq",
    },
    {
      name: intl.formatMessage({ id: "Login-nav" }),
      endpoint: "/login",
    },
    {
      name: intl.formatMessage({ id: "Profile-nav" }),
      endpoint: "/profile",
    },
  ];

  const [menu, setMenu] = useState({
    top: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (!event) {
      return;
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenu({ ...menu, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List data-test="list-display">
        {links.map(({ name, endpoint }) => (
          <ListItem button key={`list-item-${name}`}>
            <Link component={RouterLink} to={endpoint}>
              <ListItemText primary={name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const anchor = isDesktopOrLaptop ? "left" : "top";

  return (
    <div data-test="navigation-display" style={{ marginBottom: "125px" }}>
      <React.Fragment key={anchor}>
        <AppBar position="absolute" data-test="app-bar-display">
          <Toolbar>
            <Grid container justify="space-between">
              <Grid xs={1} item>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  data-test="nav-button"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4} />
            </Grid>
            <Grid xs={2} item>
              <Grid container justify="space-between">
                <img
                  src="../../src/assets/SnapIT-logo.png"
                  alt="logo"
                  style={{ height: "40px", marginLeft: "50px" }}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={anchor}
          open={menu[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Navigation;
