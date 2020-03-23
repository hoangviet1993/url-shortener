import {
  Box,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ReactComponent as RecognitionSvg
} from './icon-brand-recognition.svg';
import { ReactComponent as RecordsSvg } from './icon-detailed-records.svg';
import {
  ReactComponent as CustomizableSvg
} from './icon-fully-customizable.svg';

interface IProps {
  type: string;
  headerText: string;
  subHeaderText: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brandRecognitionSvg: {
      display: 'block',
      margin: 'auto',
      paddingTop: '18px',
    },
    brandRecognitionSvgContainer: {
      backgroundColor: 'hsl(255, 11%, 22%)',
      borderRadius: '50%',
      marginBottom: '20px',
      minHeight: '80px',
      minWidth: '80px',
    },
    container: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    customizableSvg: {
      display: 'block',
      margin: 'auto',
      paddingTop: '18px',
    },
    customizableSvgContainer: {
      backgroundColor: 'hsl(255, 11%, 22%)',
      borderRadius: '50%',
      marginBottom: '20px',
      minHeight: '85px',
      minWidth: '85px',
    },
    detailedRecordsSvg: {
      display: 'block',
      margin: 'auto',
      paddingTop: '16px',
    },
    detailedRecordsSvgContainer: {
      backgroundColor: 'hsl(255, 11%, 22%)',
      borderRadius: '50%',
      marginBottom: '20px',
      minHeight: '75px',
      minWidth: '75px',
    },
    itemListContainer: {
      backgroundColor: 'white',
      maxWidth: '320px',
      padding: '0 20px 0 30px',
    },
    itemListHeaderText: {
      fontWeight: 'bolder',
      lineHeight: '1.2',
    },
    itemListSubheaderText: {
      color: 'hsl(257, 7%, 63%)',
      fontSize: '16px',
      fontWeight: 600,
    },
    overlayContainer: {
      bottom: '40px',
      position: 'relative',
    },
  }),
);

const BRAND_RECOGNITION_TYPE = 'brand-recognition';
const DETAILED_RECORDS_TYPE = 'detailed-records';
const FULLY_CUSTOMIZABLE_TYPE = 'fully-customizable';

const LinkedFeatureBox = (props: IProps) => {
  const classes = useStyles();
  let svgFile = null;
  if (props.type === BRAND_RECOGNITION_TYPE) {
    svgFile = (
      <div className={classes.brandRecognitionSvgContainer}>
        <RecognitionSvg  className={classes.brandRecognitionSvg}/>
      </div>
    );
  } else if (props.type === DETAILED_RECORDS_TYPE) {
    svgFile = (
      <div className={classes.detailedRecordsSvgContainer}>
        <RecordsSvg  className={classes.detailedRecordsSvg}/>
      </div>
    );
  } else if (props.type === FULLY_CUSTOMIZABLE_TYPE) {
    svgFile = (
      <div className={classes.customizableSvgContainer}>
        <CustomizableSvg  className={classes.customizableSvg}/>
      </div>
    );
  }
  return(
    <div className={classes.itemListContainer}>
      <div className={classes.overlayContainer}>
        <Hidden mdDown>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            {svgFile}
            <Typography
              className={classes.itemListHeaderText}
              variant="h5"
            >
              <Box textAlign="left" m={1}>
                {props.headerText}
              </Box>
            </Typography>
            <Typography
              className={classes.itemListSubheaderText}
              variant="h6"
            >
              <Box textAlign="left" m={1}>
                {props.subHeaderText}
              </Box>
            </Typography>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {svgFile}
            <Typography
              className={classes.itemListHeaderText}
              variant="h5"
            >
              <Box textAlign="center" m={1}>
                {props.headerText}
              </Box>
            </Typography>
            <Typography
              className={classes.itemListSubheaderText}
              variant="h6"
            >
              <Box textAlign="center" m={1}>
                {props.subHeaderText}
              </Box>
            </Typography>
          </Grid>
        </Hidden>
        

      </div>
    </div>
  );
};

LinkedFeatureBox.propTypes = {
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string,
  type: PropTypes.string,
};

export default LinkedFeatureBox;
