import React from "react";
import Box from "@material-ui/core/Box";
import AccordionList from "../../components/AccordionList";

const FAQ = () => (
  <Box mt="40" mx="auto " style={{ backgroundColor: "aliceblue" }}>
    <div className="FAQ" data-test="FAQ-page">
      <h1 data-test="heading-display">FAQ</h1>
      <AccordionList data-test="FAQ-list" />
    </div>
  </Box>
);

export default FAQ;
