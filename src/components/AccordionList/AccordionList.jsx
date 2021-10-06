import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";
import AccordionListData from "./AccordionListData";

const AccordionList = () => {
  const displayAccordionList = () => (
    <div data-test="component-accordionList">
      {AccordionListData.map(({ summary, details }) => (
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

// const AccordionList = () => (
//   <div data-test="component-accordionList">
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//         sx={{ backgroundColor: "secondary.main" }}
//       >
//         <Typography sx={{ color: "text.secondary" }}>
//           <FormattedMessage
//             data-test="AccordionList-question"
//             id="FAQ-list-header1"
//             defaultMessage="Question 1"
//           />
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
//         aria-controls="panel2a-content"
//         id="panel2a-header"
//         sx={{ backgroundColor: "secondary.main" }}
//       >
//         <Typography sx={{ color: "text.secondary" }}>
//           <FormattedMessage id="FAQ-list-header2" defaultMessage="Question 2" />
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
//           dolor sit amet, consectetur adipiscing elit.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
//         aria-controls="panel3a-content"
//         id="panel3a-header"
//         sx={{ backgroundColor: "secondary.main" }}
//       >
//         <Typography sx={{ color: "text.secondary" }}>
//           <FormattedMessage id="FAQ-list-header3" defaultMessage="Question 3" />
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
//         aria-controls="panel4a-content"
//         id="panel4a-header"
//         sx={{ backgroundColor: "secondary.main" }}
//       >
//         <Typography sx={{ color: "text.secondary" }}>
//           <FormattedMessage id="FAQ-list-header4" defaultMessage="Question 4" />
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
//         aria-controls="panel5a-content"
//         id="panel5a-header"
//         sx={{ backgroundColor: "secondary.main" }}
//       >
//         <Typography sx={{ color: "text.secondary" }}>
//           <FormattedMessage id="FAQ-list-header5" defaultMessage="Question 5" />
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
//         aria-controls="panel6a-content"
//         id="panel6a-header"
//         sx={{ backgroundColor: "secondary.main" }}
//       >
//         <Typography sx={{ color: "text.secondary" }}>
//           <FormattedMessage id="FAQ-list-header6" defaultMessage="Question 6" />
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//   </div>
// );
