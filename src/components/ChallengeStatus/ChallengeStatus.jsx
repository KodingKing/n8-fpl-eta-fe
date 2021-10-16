import React from "react";

// mui
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useStyles } from "./styles";

export default function ChallengeStatus() {
  const percentage = 66;
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.content}
      >
        <Grid item>
          <Typography variant="p" className={classes.text1}>
            The Challenge Starts in
          </Typography>
        </Grid>
        <Grid item>
          <CircularProgressbar
            value={percentage}
            text={`12 days`}
            strokeWidth="9"
            styles={buildStyles({
              textSize: "1rem",
              pathTransitionDuration: 0.5,
              pathColor: `white`,
              textColor: "white",
              trailColor: "#FFFFFF66",
              backgroundColor: "#3e98c7",
            })}
            className={classes.circularProgressBar}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
            }}
          >
            Challenge Rules
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
