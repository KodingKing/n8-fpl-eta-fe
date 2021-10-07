import React from "react";

// mui components & hooks
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

// styling 
import { useStyles } from "./styles";

// custom components
import SensexChart from "./SensexChart";
import ChallengeFilter from "./ChallengeFilter";
import ChallengeCard from "./ChallengeCard";
import Logo from '../Logo/logo'

// scroll to top
function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

export default function ChallengeList(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Logo light />
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Container className={classes.root}>
                <Grid container direction="row" spacing={5}>
                    <Grid item xs={12} md={3} elevation={10}>
                        <ChallengeFilter />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Grid container direction="column" >
                            <Grid item xs={12}>
                                <SensexChart />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4" className={classes.challengeListTitle}>Pick your challenge</Typography>
                                <Grid container direction="row" spacing={3} className={classes.challengeList}>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                    <Grid item xs="12" md="12" lg="6">
                                        <ChallengeCard />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
