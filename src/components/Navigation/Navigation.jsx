import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/SnapIT-logo.svg";

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
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List data-test="list-display">
        {links.map(({ name, endpoint }) => (
          <ListItem button key={`list-item-${name}`}>
            <Link component={RouterLink} to={endpoint} underline="none">
              <ListItemText primary={name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const anchor = isDesktopOrLaptop ? "left" : "top";

  return (
    <div data-test="navigation-display">
      <React.Fragment key={anchor}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" data-test="app-bar-display">
            <Toolbar>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    data-test="nav-button"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <Menu />
                  </IconButton>
                </Grid>
                <Grid mt={1}>
                  <img src={logo} alt="SnapIt Logo" />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
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
