import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "react-responsive";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Navigation = () => {
  const intl = useIntl();

  const links = [
    {
      name: intl.formatMessage({ id: "Home-nav" }),
      endpoint: "/",
    },
    {
      name: intl.formatMessage({ id: "Information-nav" }),
      endpoint: "information",
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

  const classes = useStyles();
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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List data-test="list-display">
        {links.map(({ name, endpoint }) => (
          <ListItem button key={name} data-test="link-name">
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
