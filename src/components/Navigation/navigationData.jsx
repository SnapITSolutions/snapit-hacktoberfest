import React from "react";
import {
  Home,
  Login,
  Help,
  ImportContacts,
  Person,
  AddToQueue,
  Assignment,
  Download,
  AccountTree,
} from "@mui/icons-material";

const navigationData = [
  {
    icon: <Home />,
    name: { id: "Home-nav", endpoint: "/", defaultMessage: "Home" },
  },
  {
    icon: <ImportContacts />,
    name: {
      id: "Information-nav",
      endpoint: "/information",
      defaultMessage: "Information",
    },
  },
  {
    icon: <Help />,
    name: { id: "FAQ-nav", endpoint: "/faq", defaultMessage: "FAQ" },
  },
  {
    icon: <AccountTree />,
    name: {
      id: "Projects-nav",
      endpoint: "/projects",
      defaultMessage: "Projects",
    },
  },
  {
    icon: <Login />,
    name: { id: "Login-nav", endpoint: "/login", defaultMessage: "Login" },
  },
  {
    icon: <Person />,
    name: {
      id: "Profile-nav",
      endpoint: "/profile",
      defaultMessage: "Profile",
    },
  },
  {
    icon: <AddToQueue />,
    name: {
      id: "Contributor-nav",
      endpoint: "/contributor",
      defaultMessage: "Contributor",
    },
  },
  {
    icon: <Assignment />,
    name: {
      id: "Registration-nav",
      endpoint: "/registration",
      defaultMessage: "Registration",
    },
  },
  {
    icon: <Download />,
    name: {
      id: "Downloads-nav",
      endpoint: "/downloads",
      defaultMessage: "Downloads",
    },
  },
];

export default navigationData;
