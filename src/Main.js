import React from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, Box} from '@mui/material';
import Header from './Header';
import Footer from './Footer';

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

const MainLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
                <Header />
                <main>
                    <Outlet /> {/* This is where child route components will render */}
                </main>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default MainLayout;