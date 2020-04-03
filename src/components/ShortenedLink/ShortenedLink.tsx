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
import * as types from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(3),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    copyButtonContainerMobile: {
      padding: '0 20px 15px 20px',
    },
    divider: {
      backgroundColor: '#F0F1F6',
      padding: '8px',
    },
    originalLinkContainerDesktop: {
      padding: '20px',
    },
    originalLinkContainerMobile: {
      borderBottom: '1px solid #e6e6e6',
      display: 'block',
      overflow: 'hidden',
      padding: '15px 20px 15px 20px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    redirectLink: {
      '&:visited': {
        color: 'hsl(180, 66%, 49%)',
      },
      '@media (max-width: 960px)': {
        display: 'block',
        width: '100%',
      },
      '@media (min-width: 960px)': {
        marginRight: '15px',
      },
      color: 'hsl(180, 66%, 49%)',
      overflow: 'hidden',
      padding: '2px 0',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    redirectLinkContainerDesktop: {
      paddingRight: '20px',
    },
    redirectLinkContainerMobile: {
      display: 'block',
      overflow: 'hidden',
      padding: '15px 20px 18px 20px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    shortenLinkContainer: {
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '10px',
      overflow: 'hidden',
    },
  }),
);

const CopyButton = withStyles({
  '@media (max-width: 960px)': {
    root: {
      width: '100%',
    },
  },
  root: {
    '&:hover': {
      backgroundColor: '#9BE3E2',
    },
    backgroundColor: 'hsl(180, 66%, 49%)',
    borderRadius: '5px',
    color: 'white',
    display: 'inline-flex',
    fontSize: '12px',
    padding: '6px 30px',
    textTransform: 'none',
  },
})(Button);

function ShortenedLink(props: types.IShortenedLinkProp) {
  const classes = useStyles();
  const redirectedLink = `https://rel.ink/${props.hashID}`;
  return (
    <div>
      <div className={classes.shortenLinkContainer}>
        <Hidden smDown>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              className={classes.originalLinkContainerDesktop}
              item
            >
              <div >
                {props.url}
              </div>
            </Grid>
            <Grid
              className={classes.redirectLinkContainerDesktop}
              item
            >
              <a
                className={classes.redirectLink}
                href={redirectedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {redirectedLink}
              </a>
              <CopyButton>
                Copy
              </CopyButton>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <Grid
              className={classes.originalLinkContainerMobile}
              item
            >
              <span>
                {props.url}
              </span>
            </Grid>
            <Grid
              className={classes.redirectLinkContainerMobile}
              item
            >
              <a
                className={classes.redirectLink}
                href={redirectedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {redirectedLink}
              </a>
            </Grid>
            <Grid
              className={classes.copyButtonContainerMobile}
              item
            >
              <CopyButton>
                Copy
              </CopyButton>
            </Grid>
          </Grid>
        </Hidden>
      </div>
      <div className={classes.divider} />
    </div>
  );
}

export default ShortenedLink;
