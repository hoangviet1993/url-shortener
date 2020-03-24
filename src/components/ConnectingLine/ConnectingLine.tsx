import {
  createStyles,
  Hidden,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lineSvg: {
      stroke: 'hsl(180, 66%, 49%)',
      strokeWidth: '11px',
    },
    lineSvgContainer: {
      marginTop: '40px',
    },
    lineSvgContainerMobile: {
      marginBottom: '38px',
    },
    lineSvgMobile: {
      stroke: 'hsl(180, 66%, 49%)',
      strokeWidth: '8px',
    },
  })
);

const ConnectingLine = () => {
  const classes = useStyles();
  return (
      <div>
        <Hidden mdDown>
          <div className={classes.lineSvgContainer}>
              <svg width='25' height='25'>
                <line
                  x1='0'
                  y1='0'
                  x2='25'
                  y2='0'
                  className={classes.lineSvg}
                />
              </svg>
          </div>
        </Hidden>
        <Hidden lgUp>
          <div className={classes.lineSvgContainerMobile}>
              <svg width='24' height='46'>
                <line
                  x1='17'
                  y1='0'
                  x2='17'
                  y2='46'
                  className={classes.lineSvgMobile}
                />
              </svg>
          </div>
        </Hidden>
      </div>
  );
};

export default ConnectingLine;
