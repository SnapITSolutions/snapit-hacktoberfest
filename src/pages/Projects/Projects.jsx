import React, { useState, useEffect } from "react";
import "./styles.css";

import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
} from "@mui/material";

const Projects = () => {
  const [fetchedData, setfetchedData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:>100000&per_page=6"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setfetchedData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  console.log(fetchedData);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Projects Section
      </Typography>
      {fetchedData.length === 0 ? (
        <Grid className="grid" container>
          <CardActions>
            <Typography variant="h4">Loading ...</Typography>
          </CardActions>
        </Grid>
      ) : (
        <Grid className="grid" container spacing={10}>
          {fetchedData.items.map((item) => (
            <Card className="card" sx={{ maxWidth: 440 }} key={item.id}>
              <CardMedia
                component="img"
                height="240"
                image={item.owner.avatar_url}
                alt={item.name}
              />
              <CardActions>
                <div className="body">
                  <Typography variant="h4" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Button
                    className="button"
                    variant="contained"
                    type="button"
                    size="small"
                    href={item.homepage}
                  >
                    Homepage
                  </Button>
                  <Button
                    className="button"
                    variant="contained"
                    type="button"
                    size="small"
                    href={item.html_url}
                  >
                    Github
                  </Button>
                </div>
              </CardActions>
            </Card>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Projects;
