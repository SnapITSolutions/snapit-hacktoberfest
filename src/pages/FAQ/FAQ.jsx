import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AccordionList from "../../components/AccordionList";

const FAQ = () => (
  <Box mt="40" mx="auto" sx={{ width: "70%" }}>
    <div className="FAQ" data-test="FAQ-page">
      <Typography
        m={5}
        variant="h4"
        data-test="heading-display"
        textAlign="center"
      >
        FAQ
      </Typography>
      <AccordionList data-test="FAQ-list" />
    </div>
  </Box>
);

export default FAQ;
