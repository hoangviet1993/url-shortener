import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
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
      <Navbar />
      <Hero />
      <ShortenDemo />
      <p>
        Advanced Statistics
      </p>
      <p>
        Track how your links are performing across the web with our 
        advanced statistics dashboard.
      </p>
      <p>
        Brand Recognition
      </p>
      <p>
        Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.
      </p>
      <p>
        Detailed Records
      </p>
      <p>
        Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.
      </p>
      <p>
        Fully Customizable
      </p>
      <p>
        Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.
      </p>
      <p>
        Boost your links today
      </p>
      <button>
        Get Started
      </button>
    </MuiThemeProvider>
  );
}

export default App;
