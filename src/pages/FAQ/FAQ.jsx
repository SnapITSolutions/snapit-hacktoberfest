import React from "react";
import { Box, Typography } from "@mui/material";
import AccordionList from "../../components/AccordionList";

const FAQ = () => (
  <Box mt="40" mx="auto" sx={{ width: "70%" }}>
    <Box className="FAQ" data-test="FAQ-page">
      <Typography variant="h3" my={2} data-test="heading-display">
        FAQ
      </Typography>
      <AccordionList data-test="FAQ-list" />
    </Box>
  </Box>
);

export default FAQ;
