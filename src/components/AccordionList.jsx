import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";
import accordionListData from "./AccordionList/accordionListData";

const AccordionList = () => {
  const displayAccordionList = () => (
    <div data-test="component-accordionList">
      {accordionListData.map(({ summary, details }) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography data-test="AccordionList-question">
              <FormattedMessage
                id={summary.id}
                defaultMessage={summary.value}
              />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FormattedMessage
                id={details.id}
                defaultMessage={details.value}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
  return displayAccordionList();
};

export default AccordionList;
