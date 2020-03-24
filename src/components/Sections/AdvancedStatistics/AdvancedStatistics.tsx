import {
  Box,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import React from 'react';
import ConnectingLine from '../../ConnectingLine/ConnectingLine';
import LinkedFeatureBox from '../../LinkedFeatureBox/LinkedFeatureBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    advancedStatisticsContainer : {
      backgroundColor: '#F0F1F6',
      paddingBottom: '80px',
    },
    brandRecognitionContainerMobile: {
      marginTop: '70px',
    },
    container: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    detailedRecordContainer: {
      marginTop: '100px'
    },
    fullyCustomizableContainer: {
      marginTop: '160px',
    },
    headerText: {
      fontWeight: 700,
      lineHeight: '1.2',
      paddingTop: '80px',
    },
    lineSvg: {
      stroke: 'hsl(180, 66%, 49%)',
      strokeWidth: '15px',
    },
    lineSvgContainer: {
      marginTop: '40px',
    },
    subHeaderText: {
      color: 'hsl(257, 7%, 63%)',
      fontWeight: 'bold',
      lineHeight: '1.7',
      maxWidth: '700px',
      paddingBottom: '10px',
    },
    textColumnContainer: {
      padding: '0 20px',
    },
  })
);

const featureBoxInfoDefinitions = [{
  headerText: 'Brand Recognition',
  subHeaderText: `Boost your brand recognition with each click. Generic links 
    don't mean a thing. Branded links help instill confidence in your content.`,
  type: 'brand-recognition',
}, {
  headerText: 'Detailed Records',
  subHeaderText: `Gain insights into who is clicking your links. Knowing when 
    and where people engage with your content helps inform better decisions.`,
  type: 'detailed-records',
}, {
  headerText: 'Fully Customizable',
  subHeaderText: `Improve brand awareness and content discoverability through 
    customizable links. Supercharging audience engagement.`,
  type: 'fully-customizable',
}];

const AdvancedStatistics = () => {
  const classes = useStyles();
  return (
    <div className={classes.advancedStatisticsContainer}>
      <Grid
        className={classes.textColumnContainer}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          className={classes.headerText}
          variant="h3"
          gutterBottom
        >
          <Box textAlign="center" m={1}>
            Advanced Statistics
          </Box>
        </Typography>
        <Typography
          className={classes.subHeaderText}
          variant="h5"
        >
          <Box textAlign="center" m={1}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Box>
        </Typography>
        <Hidden mdDown>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <LinkedFeatureBox
              type={featureBoxInfoDefinitions[0].type}
              headerText={featureBoxInfoDefinitions[0].headerText}
              subHeaderText={featureBoxInfoDefinitions[0].subHeaderText}
            />
            <ConnectingLine/>
            <div className={classes.detailedRecordContainer}>
              <LinkedFeatureBox
                type={featureBoxInfoDefinitions[1].type}
                headerText={featureBoxInfoDefinitions[1].headerText}
                subHeaderText={featureBoxInfoDefinitions[1].subHeaderText}
              />
            </div>
            <ConnectingLine/>
            <div className={classes.fullyCustomizableContainer}>
              <LinkedFeatureBox
                type={featureBoxInfoDefinitions[2].type}
                headerText={featureBoxInfoDefinitions[2].headerText}
                subHeaderText={featureBoxInfoDefinitions[2].subHeaderText}
              />
            </div>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <div className={classes.brandRecognitionContainerMobile}>
              <LinkedFeatureBox
                type={featureBoxInfoDefinitions[0].type}
                headerText={featureBoxInfoDefinitions[0].headerText}
                subHeaderText={featureBoxInfoDefinitions[0].subHeaderText}
              />
            </div>
            <ConnectingLine/>
            <LinkedFeatureBox
              type={featureBoxInfoDefinitions[1].type}
              headerText={featureBoxInfoDefinitions[1].headerText}
              subHeaderText={featureBoxInfoDefinitions[1].subHeaderText}
            />
            <ConnectingLine/>
            <LinkedFeatureBox
              type={featureBoxInfoDefinitions[2].type}
              headerText={featureBoxInfoDefinitions[2].headerText}
              subHeaderText={featureBoxInfoDefinitions[2].subHeaderText}
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default AdvancedStatistics;
