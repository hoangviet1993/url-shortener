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
import './Footer.css';
import { ReactComponent as FacebookLogoSvg} from './icon-facebook.svg';
import { ReactComponent as InstagramLogoSvg} from './icon-instagram.svg';
import { ReactComponent as PinterestLogoSvg} from './icon-pinterest.svg';
import { ReactComponent as TwitterLogoSvg} from './icon-twitter.svg';
import { ReactComponent as FooterLogoSvg } from './logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
    facebookLogo: {
      '&:hover': {
        fill: 'hsl(180, 66%, 49%)',
      },
    },
    footerContainer: {
      backgroundColor: 'hsl(260, 8%, 14%)',
      color: 'rgb(255, 255, 255)',
      padding: '60px', 
    },
    footerLinkColumnContainer: {
      marginBottom: '30px',
    },
    footerLogoSvgContainer: {
      marginBottom: '40px',
      marginTop: '10px',
    },
    footerSocialMediaLogoContainer: {
       margin: '10px 30px 0 0'
    },
    headerText: {
      color: 'rgb(255, 255, 255)',
      fontWeight: 700,
      lineHeight: '1.2',
    },
    instagramLogoContainer: {
      marginTop: '10px'
    },
    sociaMediaLogo: {
      '&:hover': {
        backgroundColor: 'hsl(180, 66%, 49%)',
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  // TODO: Break up Footer's column into components.
  return (
    <div className={classes.footerContainer}>
      <Hidden mdDown>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item sm={4}>
            <div className={classes.footerLogoSvgContainer}>
              <FooterLogoSvg/>
            </div>
          </Grid>
          <Grid item sm={8}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    className={classes.headerText}
                    variant="h6"
                    gutterBottom>
                    <Box textAlign="center" m={1}>
                      Features
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Branded Links"
                      >
                        Link Shortening
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Branded Links"
                      >
                        Branded Links
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Analytics"
                      >
                        Analytics
                      </a>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    className={classes.headerText}
                    variant="h6"
                    gutterBottom>
                    <Box textAlign="center" m={1}>
                      Resources
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Blog"
                      >
                        Blog
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Developers"
                      >
                        Developers
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Support"
                      >
                        Support
                      </a>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    className={classes.headerText}
                    variant="h6"
                    gutterBottom>
                    <Box textAlign="center" m={1}>
                      Company
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="About"
                      >
                        About
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Our Teams"
                      >
                        Our Teams
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Career"
                      >
                        Careers
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Contact"
                      >
                        Contact
                      </a>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div className={classes.footerSocialMediaLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Facebook"
                    >
                      <FacebookLogoSvg/>
                    </a>
                  </div>
                  <div className={classes.footerSocialMediaLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Twitter"
                    >
                      <TwitterLogoSvg/>
                    </a>
                  </div>
                  <div className={classes.footerSocialMediaLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Pinterest"
                    >
                      <PinterestLogoSvg/>
                    </a>
                  </div>
                  <div className={classes.instagramLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Instagram"
                    >
                      <InstagramLogoSvg/>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <div className={classes.footerLogoSvgContainer}>
              <FooterLogoSvg/>
            </div>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.footerLinkColumnContainer}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Typography
                    className={classes.headerText}
                    variant="h6"
                    gutterBottom>
                    <Box textAlign="center" m={1}>
                      Features
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Branded Links"
                      >
                        Link Shortening
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Branded Links"
                      >
                        Branded Links
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Analytics"
                      >
                        Analytics
                      </a>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.footerLinkColumnContainer}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Typography
                    className={classes.headerText}
                    variant="h6"
                    gutterBottom>
                    <Box textAlign="center" m={1}>
                      Resources
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Blog"
                      >
                        Blog
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Developers"
                      >
                        Developers
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Support"
                      >
                        Support
                      </a>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.footerLinkColumnContainer}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Typography
                    className={classes.headerText}
                    variant="h6"
                    gutterBottom>
                    <Box textAlign="center" m={1}>
                      Company
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="About"
                      >
                        About
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Our Teams"
                      >
                        Our Teams
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Career"
                      >
                        Careers
                      </a>
                    </Box>
                  </Typography>
                  <Typography variant="body1" component={'span'}>
                    <Box textAlign="center" m={1}>
                      <a
                        className="footer"
                        href="/"
                        target="_blank"
                        title="Contact"
                      >
                        Contact
                      </a>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <div className={classes.footerSocialMediaLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Facebook"
                    >
                      <FacebookLogoSvg/>
                    </a>
                  </div>
                  <div className={classes.footerSocialMediaLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Twitter"
                    >
                      <TwitterLogoSvg/>
                    </a>
                  </div>
                  <div className={classes.footerSocialMediaLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Pinterest"
                    >
                      <PinterestLogoSvg/>
                    </a>
                  </div>
                  <div className={classes.instagramLogoContainer}>
                    <a
                      className="footerSvg"
                      href="/"
                      target="_blank"
                      title="Pinterest"
                    >
                      <InstagramLogoSvg/>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default Footer;
