import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import React from 'react';
import 
  violetBackGroundImageDesktop 
from '../BoostYourLink/bg-boost-desktop.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    getStartedButton: {
      '&:hover': {
        backgroundColor: '#9BE3E2',
      },
      backgroundColor: 'hsl(180, 66%, 49%)',
      borderRadius: '30px',
      color: 'rgb(255, 255, 255)',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '40px',
      marginTop: '20px',
      minWidth: '200px',
      textTransform: 'none',
    },
    headerText: {
      color: 'rgb(255, 255, 255)',
      fontWeight: 700,
      lineHeight: '1.2',
      paddingTop: '40px',
    },
    violetContainerDesktop: {
      backgroundColor: 'hsl(257, 27%, 26%)',
      backgroundImage: 'url("' + violetBackGroundImageDesktop + '")',
      backgroundSize: 'cover',
      padding: '0 20px',
    }
  })
);

const BoostYourLink = () => {
  const classes = useStyles();
  return (
    <div className={classes.violetContainerDesktop}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          className={classes.headerText}
          variant="h3"
        >
          <Box textAlign="center" m={1}>
            Boost your link today
          </Box>
        </Typography>
        <Button className={classes.getStartedButton}>
          Get Started
        </Button>
      </Grid>
    </div>
  );
};

export default BoostYourLink;
