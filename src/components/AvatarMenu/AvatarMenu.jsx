import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useAuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = ["Sign Out"];

const AvatarMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const history = useHistory();
  const { signout } = useAuthContext();

  const handleClickListItem = (event) => {
    setAnchorEl(event);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    signout(() => {
      history.push("/");
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div data-test="avatar-display">
      <Avatar
        className={classes.small}
        alt="User's Name"
        src="/static/images/avatar/1.jpg"
        button="true"
        onClick={handleClickListItem}
        data-test="avatar-button"
      />
      <div className={classes.root}>
        <List component="nav" aria-label="Device settings" />
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          data-test="menu-display"
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default AvatarMenu;
