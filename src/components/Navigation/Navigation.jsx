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
    <div data-test="navigation-display">
      <React.Fragment key={anchor}>
        <Button data-test="nav-button" onClick={toggleDrawer(anchor, true)}>
          <MenuIcon />
        </Button>
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
