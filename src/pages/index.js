import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Project from "../components/Project";
import Footer from "../components/Footer";
import About from "../components/About";
import Skill from "../components/Skill";

const theme = createTheme();

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <main>
        {/* Hero unit */}
        <Header />
        <About />
        <Skill />
        <Project />
      </main>
      {/* Footer */}
        <Footer />
      {/* End footer */}
    </ThemeProvider>
  )
}

export default IndexPage
