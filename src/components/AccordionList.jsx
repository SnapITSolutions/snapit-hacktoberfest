import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";
import accordionListData from "./AccordionList/accordionListData";

const AccordionList = () => {
  const displayAccordionList = () => (
    <div data-test="component-accordionList">
      {accordionListData.map(({ summary, details, accordionId }) => (
        <React.Fragment key={accordionId}>
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
        </React.Fragment>
      ))}
    </div>
  );
  return displayAccordionList();
};

export default AccordionList;
