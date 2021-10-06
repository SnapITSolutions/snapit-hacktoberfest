import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import HelpIcon from "@mui/icons-material/Help";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
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
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/SnapIT-logo.svg";
import AvatarMenu from "../AvatarMenu";

const Navigation = () => {
  const intl = useIntl();

  const links = [
    {
      icon: <HomeIcon />,
      name: intl.formatMessage({ id: "Home-nav" }),
      endpoint: "/",
    },
    {
      icon: <ImportContactsIcon />,
      name: intl.formatMessage({ id: "Information-nav" }),
      endpoint: "/information",
    },
    {
      icon: <HelpIcon />,
      name: intl.formatMessage({ id: "FAQ-nav" }),
      endpoint: "/faq",
    },
    {
      icon: <LoginIcon />,
      name: intl.formatMessage({ id: "Login-nav" }),
      endpoint: "/login",
    },
    {
      icon: <PersonIcon />,
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
      sx={{ width: 175 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List data-test="list-display">
        {links.map(({ icon, name, endpoint }) => (
          <Link
            component={RouterLink}
            to={endpoint}
            underline="none"
            key={`list-item-${name}`}
          >
            <ListItem button>
              <ListItemIcon sx={{ color: "secondary.main" }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
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
                    <MenuIcon />
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
          <Box sx={{ mt: 3 }}>
            <AvatarMenu />
          </Box>
          <Box>{list(anchor)}</Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Navigation;
