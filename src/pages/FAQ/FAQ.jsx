import React from "react";
import { Box, Typography } from "@mui/material";
import AccordionList from "../../components/AccordionList";

const FAQ = () => (
  <Box
    mt="40"
    mx="auto"
    sx={{ width: "70%" }}
    pt={6}
    className="FAQ"
    data-test="FAQ-page"
  >
    <Typography
      variant="h3"
      style={{ fontWeight: 700 }}
      mb={5}
      data-test="heading-display"
    >
      FAQ
    </Typography>
    <AccordionList data-test="FAQ-list" />
  </Box>
);

export default FAQ;
