import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useAuthContext } from "../../contexts/AuthContext";

const options = ["Sign Out"];

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const history = useHistory();
  const { signout } = useAuthContext();

  const handleClickListItem = (event) => {
    setAnchorEl(event.target);
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
    <div>
      <div data-test="avatar-display">
        <Box sx={{ ml: 4.5 }}>
          <Avatar
            size="small"
            alt="User's Name"
            src="/static/images/avatar/1.jpg"
            button="true"
            onClick={handleClickListItem}
            data-test="avatar-button"
          />
        </Box>
        <Box sx={{ ml: 2 }}>
          <h3 data-test="username-display">Username</h3>
        </Box>
        <div>
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
    </div>
  );
};

export default AvatarMenu;
