import { 
  AppBar,
  Button,
  Toolbar,
  useMediaQuery,
  withStyles
} from '@material-ui/core';
import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import { ReactComponent as LogoSvg } from './logo.svg';
import './Navbar.css';

// MaterialUI button styling overrides.
const SignupButton = withStyles({
  root: {
    '&:hover': {
      backgroundColor: '#9BE3E2',
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

const toolbarStyleMobile = {
  backgroundColor: 'white',
  color: 'hsl(257, 7%, 63%)',
  minHeight: '60px',
}

const toolbarStyleDesktop = {
  backgroundColor: 'white',
  color: 'hsl(257, 7%, 63%)',
  minHeight: '60px',
  paddingLeft: '52px',
}

const Navbar = () => {
  const matchesMaxWidth = useMediaQuery('(max-width:750px)');
  if (matchesMaxWidth) {
    return (
      <AppBar elevation={0} position="static">
        <Toolbar style={toolbarStyleMobile}>
          <div className="shortly-button-container-mobile">
            <LogoSvg/>
          </div>
          <HamburgerMenu />
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar elevation={0} position="static">
        <Toolbar style={toolbarStyleDesktop}>
          <LogoSvg className="ShortlySvg"/>
          <a
            className="navbarLink"
            href="/"
            target="_blank"
            title="Features"
          >
            Features
          </a>
          <a
            className="navbarLink"
            href="/"
            target="_blank"
            title="Pricing"
          >
            Pricing
          </a>
          <div className="resources-button-container">
            <a
              className="navbarLink"
              href="/"
              target="_blank"
              title="Resources"
            >
              Resources
            </a>
          </div>
          <a
            className="navbarLink"
            href="/"
            target="_blank"
            title="Login"
          >
            Login
          </a>
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
