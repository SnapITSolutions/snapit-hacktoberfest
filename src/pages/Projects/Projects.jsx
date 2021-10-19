import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://api.github.com/search/repositories?q=stars:>100000&per_page=6"
    );
    setfetchedData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Projects Section
      </Typography>
      {fetchedData.length === 0 ? (
        <Grid className="grid" container>
          <CardActions>
            <Typography className="title" variant="h4">
              Loading ...
            </Typography>
          </CardActions>
        </Grid>
      ) : (
        <Grid
          className="grid"
          container
          spacing={10}
          style={{ marginTop: "30px" }}
        >
          {fetchedData.items.map((item) => (
            <Card className="card" sx={{ maxWidth: 440 }} id={item.id}>
              <CardMedia
                component="img"
                height="240"
                image={item.owner.avatar_url}
                alt={item.name}
              />
              <CardActions>
                <div className="body">
                  <Typography className="title" variant="h4" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Button
                    style={{ marginTop: "20px", marginRight: "20px" }}
                    variant="contained"
                    type="button"
                    size="small"
                    href={item.homepage}
                  >
                    Homepage
                  </Button>
                  <Button
                    style={{ marginTop: "20px" }}
                    variant="contained"
                    type="button"
                    size="small"
                    href={item.homepage}
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
