import React from "react";
import Box from "@material-ui/core/Box";
import AccordionList from "../components/AccordionList";

const FAQ = () => (
  <Box mt="40" mx="auto ">
    <div className="FAQ" data-test="FAQ-page">
      <h1>FAQ</h1>
      <AccordionList />
    </div>
  </Box>
);

export default FAQ;
