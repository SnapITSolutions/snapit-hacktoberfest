import React from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import informationData from "./informationData";
import Map from "../../components/Map/Map";

const Information = () => (
  <>
    <div data-test="information-display">
      {informationData.map(({ header, paragraph }) => {
        const result = (
          <div key={header.id}>
            <Typography
              m={4}
              variant="h4"
              data-test="heading-display"
              textAlign="center"
            >
              <FormattedMessage id={header.id} defaultMessage={header.values} />
              <Typography variant="body1" pt={1} data-test="para-display">
                <FormattedMessage
                  id={paragraph.id}
                  defaultMessage={paragraph.values}
                />
              </Typography>
            </Typography>
          </div>
        );
        return result;
      })}
    </div>
    <Map />
  </>
);

export default Information;
