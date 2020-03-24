import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AdvancedStatistics 
from './components/Sections/AdvancedStatistics/AdvancedStatistics';
import BoostYourLink from './components/Sections/BoostYourLink/BoostYourLink';
import Hero from './components/Sections/Hero/Hero';
import ShortenDemo from './components/Sections/ShortenDemo/ShortenDemo'

const theme = createMuiTheme({
  typography: {
    "fontFamily": "\"Poppins\", sans-serif",
  }
});

theme.typography.h1 = {
  fontSize: '3.0rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '4.0rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5.0rem',
  },
};

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar/>
      <Hero/>
      <ShortenDemo/>
      <AdvancedStatistics/>
      <BoostYourLink/>
    </MuiThemeProvider>
  );
}

export default App;
