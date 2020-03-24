import {
  Button,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import './ShortenDemo.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(3),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    linkInputContainerMobile: {
      paddingBottom: '15px',
    },
  }),
);

const ShortenButton = withStyles({
  '@media (min-width: 960px)': {
    root: {
      minHeight: '51.33px',
    },
  },
  root: {
    '&:hover': {
<<<<<<< HEAD
      backgroundColor: 'white',
      color: 'hsl(180, 66%, 49%)'
=======
      backgroundColor: '#9BE3E2',
>>>>>>> 0dfa0ba596426927dd85bf7bd4575548de8f4d6f
    },
    backgroundColor: 'hsl(180, 66%, 49%)',
    borderRadius: '5px',
    color: 'white',
    float: 'left',
    fontSize: '18px',
    minWidth: '150px',
    padding: '6px',
    textTransform: 'none',
    width: '100%',
  },
})(Button);

const ShortenDemo = () => {
  const classes = useStyles();
  return(
    <div className="split-color-container">
      <div className="violet-container">
        <Hidden smDown>
          <Grid
            className="shorten-demo"
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item md={9} lg={10}>
              <input type="text" placeholder="Shorten a link here..." />
            </Grid>
            <Grid item md={"auto"}>
              <ShortenButton>
                Shorten It!
              </ShortenButton>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid
            className="shorten-demo"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <Grid item sm={"auto"}>
              <div className={classes.linkInputContainerMobile}>
                <input type="text" placeholder="Shorten a link here..." />
              </div>
            </Grid>
            <ShortenButton>
              Shorten It!
            </ShortenButton>
          </Grid>
        </Hidden>
      </div>
    </div>
  );
};

export default ShortenDemo;
