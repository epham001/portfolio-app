// src/Home.js
import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Avatar, createTheme, ThemeProvider, Grid, Paper, Link, Icon } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Dark gray background
    },
    text: {
      primary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function AFB() {
  const navigate = useNavigate();

  return (

    <Container maxWidth='md' sx={{ py: 5 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
        <Link underline="hover" color="inherit" onClick={() => { navigate("/") }}>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
        >
          402nd SWEG
        </Link>

      </Breadcrumbs>
      <Typography variant="h5" gutterBottom>402nd Software Engineering Group</Typography>
      <Typography sx={{ marginBottom: 8 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <ul>
          <li>Designing and developing a containerized project tracker for the U.S. Air Force</li>
          <li>Automating document processing pipelines with Alteryx and web applications for Ryan LLC</li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

      <Box sx={{ marginBottom: 8 }}>
        <img src='robinsAFB.jpg' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography variant="h5" >Team Metrics</Typography>
      <Typography sx={{ marginBottom: 8 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <ul>
          <li>Designing and developing a containerized project tracker for the U.S. Air Force</li>
          <li>Automating document processing pipelines with Alteryx and web applications for Ryan LLC</li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

      <Typography variant="h5" >Team ATLAS</Typography>
      <Typography sx={{ marginBottom: 8 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <ul>
          <li>Designing and developing a containerized project tracker for the U.S. Air Force</li>
          <li>Automating document processing pipelines with Alteryx and web applications for Ryan LLC</li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

      <Box sx={{ marginBottom: 8 }}>
        <img src='Frame 3.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 8 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <ul>
          <li>Designing and developing a containerized project tracker for the U.S. Air Force</li>
          <li>Automating document processing pipelines with Alteryx and web applications for Ryan LLC</li>
        </ul>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

    </Container>




  );
}

export default AFB;

