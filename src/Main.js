import React from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider as MuiThemeProvider, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider as TWThemeProvider } from "@material-tailwind/react";

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
    breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750, // new breakpoint
      custom: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const MainLayout = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <TWThemeProvider>
                <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
                    <Header />
                    <main>
                        <Outlet /> {/* This is where child route components will render */}
                    </main>
                    <Footer />
                </Box>
            </TWThemeProvider>
        </MuiThemeProvider>
    );
};

export default MainLayout;