import React from "react";

import { Typography, Grid } from "@mui/material";

import { useStyles } from "components/LeaderBoard/styles";

import LeaderBoardRow from "./LeaderboardRow";

export default function LeaderBoard(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Leader Board
      </Typography>
      <div className={classes.lbContainer}>
        <Grid
          container
          direction="row"
          className={classes.container}>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Participant"
              portfolio_return="Portfolio Return"
              _1_day_change="1 Day Change"
              _1_day_position_change="1 Day Position Change"
              isTitle={true}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="00.00%"
              _1_day_position_change={5}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="-20.12%"
              _1_day_position_change={0}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="20.12%"
              _1_day_position_change={-5}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="20.12%"
              _1_day_position_change={5}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="20.12%"
              _1_day_position_change={5}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="20.12%"
              _1_day_position_change={5}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="20.12%"
              _1_day_position_change={5}
              isTitle={false}
              position="1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Tushar L"
              portfolio_return="24.54%"
              _1_day_change="20.12%"
              _1_day_position_change={5}
              isTitle={false}
              position="1"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
