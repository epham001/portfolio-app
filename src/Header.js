// src/Home.js
import React from 'react';
import { Box, Typography, Avatar} from '@mui/material';

function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                borderBottom: '1px solid #333',
            }}
        >
            <Avatar
                alt="profile_pic,jpg"
                src={`${process.env.PUBLIC_URL}/profile_pic.jpg`} 
                sx={{ width: 100, height: 100, marginRight: 3 }}
            />
            <Box>
                <Typography variant="h4">Ethan Pham</Typography>
                <Typography variant="subtitle1">Software Developer | BS @ University of Georgia </Typography>
            </Box>
        </Box>
    );

};

export default Header;