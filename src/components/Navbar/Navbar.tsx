import { 
  AppBar, Button, Toolbar, useMediaQuery, withStyles
} from '@material-ui/core';
import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import { ReactComponent as LogoSvg } from './logo.svg';
import './Navbar.css';

// MaterialUI button styling overrides.
const SignupButton = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'white',
      color: 'hsl(180, 66%, 49%)'
    },
    backgroundColor: 'hsl(180, 66%, 49%)',
    borderRadius: '30px',
    color: 'white',
    fontSize: '18px',
    marginLeft: '15px',
    minWidth: '100px',
    textTransform: 'none',
  },
})(Button);

const FeaturesButtonMargin = {
  marginLeft: '30px'
}

const PricingButtonMargin =  {
  margin: '0 15px'
};

const Navbar = () => {
  const matchesMaxWidth = useMediaQuery('(max-width:650px)');
  if (matchesMaxWidth) {
    return (
      <AppBar position="static">
        <Toolbar className="Toolbar">
          <div className="shortly-button-container-mobile">
            <Button
                href="/"
            >
              <LogoSvg/>
            </Button>
          </div>
          <HamburgerMenu />
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static">
        <Toolbar className="Toolbar">
          <Button
            href="/"
          >
            <LogoSvg className="ShortlySvg"/>
          </Button>
          <Button
            classes={{ label: 'NavbarButtonLabel' }}
            color="inherit"
            style={FeaturesButtonMargin}
            href="/features"
          >
            Features
          </Button>
          <Button
            classes={{ label: 'NavbarButtonLabel' }}
            color="inherit"
            style={PricingButtonMargin}
            href="/pricing"
          >
            Pricing
          </Button>
          <div className="resources-button-container">
            <Button
              classes={{ label: 'NavbarButtonLabel' }}
              color="inherit"
              href="/resources"
            >
              Resources
            </Button>
          </div>
          <Button 
            classes={{ label: 'NavbarButtonLabel' }}
            color="inherit"
            href="/login"
          >
            Login
          </Button>
          <SignupButton
            href="/signup"
          >
            Sign Up
          </SignupButton>
        </Toolbar>
      </AppBar>
    )
  }
};

export default Navbar;