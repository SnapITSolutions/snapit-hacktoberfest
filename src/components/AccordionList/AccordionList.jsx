import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";
import accordionListData from "./accordionListData";

const AccordionList = () => (
  <div data-test="component-accordionList">
    {accordionListData.map(({ summary, details }) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "secondary.main" }}
        >
          <Typography
            data-test="AccordionList-question"
            sx={{ color: "text.secondary" }}
          >
            <FormattedMessage id={summary.id} defaultMessage={summary.value} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormattedMessage id={details.id} defaultMessage={details.value} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
);

export default AccordionList;
