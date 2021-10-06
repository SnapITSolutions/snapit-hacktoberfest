import React from "react";
import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
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
        <FormattedMessage
          id="FAQ-heading"
          defaultMessage="Frequently Asked Questions"
        />
      </Typography>
      <AccordionList data-test="FAQ-list" />
    </div>
  </Box>
);

export default FAQ;
