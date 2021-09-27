import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useIntl } from "react-intl";

const AccordionList = () => {
  const intl = useIntl();

  const AccordionData = [
    {
      summary: intl.formatMessage({
        id: "FAQ-list-header1",
        values: {
          defaultMessage: "Question 1",
        },
      }),
      details: intl.formatMessage({
        id: "FAQ-list-answer1",
        values: {
          defaultMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
      }),
    },
    {
      summary: intl.formatMessage({
        id: "FAQ-list-header2",
        values: {
          defaultMessage: "Question 2",
        },
      }),
      details: intl.formatMessage({
        id: "FAQ-list-answer2",
        values: {
          defaultMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
      }),
    },
    {
      summary: intl.formatMessage({
        id: "FAQ-list-header3",
        values: {
          defaultMessage: "Question 3",
        },
      }),
      details: intl.formatMessage({
        id: "FAQ-list-answer3",
        values: {
          defaultMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
      }),
    },
    {
      summary: intl.formatMessage({
        id: "FAQ-list-header4",
        values: {
          defaultMessage: "Question 4",
        },
      }),
      details: intl.formatMessage({
        id: "FAQ-list-answer4",
        values: {
          defaultMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
      }),
    },
    {
      summary: intl.formatMessage({
        id: "FAQ-list-header5",
        values: {
          defaultMessage: "Question 5",
        },
      }),
      details: intl.formatMessage({
        id: "FAQ-list-answer5",
        values: {
          defaultMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
      }),
    },
    {
      summary: intl.formatMessage({
        id: "FAQ-list-header6",
        values: {
          defaultMessage: "Question 6",
        },
      }),
      details: intl.formatMessage({
        id: "FAQ-list-answer6",
        values: {
          defaultMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        },
      }),
    },
  ];

  const displayAccordionList = () => (
    <div data-test="component-accordionList">
      {AccordionData.map(({ summary, details }) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography data-test="AccordionList-question">
              {summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
  return displayAccordionList();
};

export default AccordionList;
