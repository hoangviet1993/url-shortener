import {
  Box,
  Button,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import React from 'react';
import { ReactComponent as WorkingSvg} from './illustration-working.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    getStartedButton: {
      '&:hover': {
<<<<<<< HEAD
        backgroundColor: 'white',
        color: 'hsl(180, 66%, 49%)'
=======
        backgroundColor: '#9BE3E2',
>>>>>>> 0dfa0ba596426927dd85bf7bd4575548de8f4d6f
      },
      backgroundColor: 'hsl(180, 66%, 49%)',
      borderRadius: '30px',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '20px',
      minWidth: '200px',
      textTransform: 'none',
    },
    headerText: {
      fontWeight: 'bold',
      lineHeight: '1.2',
    },
    heroContainer: {
      paddingBottom: '40px',
      paddingTop: '40px',
    },
    mobileTextColumnContainer: {
<<<<<<< HEAD
      padding: '0 60px',
=======
      padding: '0 30px',
>>>>>>> 0dfa0ba596426927dd85bf7bd4575548de8f4d6f
    },
    mobileWorkingSvgContainer: {
      paddingBottom: '30px',
      paddingLeft: '60px',
    },
    subHeaderText: {
      color: 'hsl(257, 7%, 63%)',
      fontWeight: 'bold',
    },
    textColumn: {
      maxWidth: '650px',
      paddingLeft: '60px',
      paddingRight: '50px',
    },
    workingSvg: {
      maxWidth: '100%',
    }
  }),
);

const Hero = () => {
  const classes = useStyles();
  return(
    <div className={classes.heroContainer}>
      <Grid
        container
        spacing={0}
<<<<<<< HEAD
=======
        direction="row"
        justify="center"
        alignItems="center"
>>>>>>> 0dfa0ba596426927dd85bf7bd4575548de8f4d6f
      >
        <Hidden mdUp>
          <Grid
            className={classes.mobileWorkingSvgContainer}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <WorkingSvg className={classes.workingSvg} />
          </Grid>
          <Grid
            className={classes.mobileTextColumnContainer}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              className={classes.headerText}
              variant="h1"
            >
              <Box textAlign="center" m={1}>
                More than just shorter links
              </Box>
            </Typography>
            <Typography
              className={classes.subHeaderText}
              variant="h5"
            >
              <Box textAlign="center" m={1}>
                Build your brand’s recognition and get detailed insights 
                on how your links are performing.
              </Box>
            </Typography>
            <Button className={classes.getStartedButton}>
              Get Started
            </Button>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item md={7}>
            <div className={classes.textColumn}>
<<<<<<< HEAD
              <Typography
                className={classes.headerText}
                variant="h1"
                gutterBottom>
                More than just shorter links
              </Typography>
              <Typography
                className={classes.subHeaderText}
                variant="h5"
                gutterBottom>
                Build your brand’s recognition and get detailed insights
                on how your links are performing.
              </Typography>
              <Button className={classes.getStartedButton}>
                Get Started
              </Button>
=======
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
              >
                <Typography
                  className={classes.headerText}
                  variant="h1"
                  gutterBottom>
                  More than just shorter links
                </Typography>
                <Typography
                  className={classes.subHeaderText}
                  variant="h5"
                  gutterBottom>
                  Build your brand’s recognition and get detailed insights
                  on how your links are performing.
                </Typography>
                <Button className={classes.getStartedButton}>
                  Get Started
                </Button>
              </Grid>
>>>>>>> 0dfa0ba596426927dd85bf7bd4575548de8f4d6f
            </div>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item md={5}>
            <WorkingSvg className={classes.workingSvg} />
          </Grid>
        </Hidden>
        
      </Grid>
    </div>
  );
};

export default Hero;
