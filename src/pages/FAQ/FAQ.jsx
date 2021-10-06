import React from "react";
import Box from "@mui/material/Box";
import AccordionList from "../../components/AccordionList/AccordionList";

const FAQ = () => (
  <Box mt="40" mx="auto" sx={{ width: "70%" }}>
    <div className="FAQ" data-test="FAQ-page">
      <h1 data-test="heading-display">FAQ</h1>
      <AccordionList data-test="FAQ-list" />
    </div>
  </Box>
);

export default FAQ;
