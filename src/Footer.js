import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            borderTop: '1px solid #333',
        }}>
            <Container maxWidth='md' >
                <Grid container spacing={{ xs: 8, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid size='grow' >
                        <Typography gutterBottom>Contact me</Typography>
                        <Typography variant='subtitle2' sx={{ marginBottom: 1 }}>
                            ethanpham001@gmail.com
                        </Typography>
                        <Typography variant='subtitle2'>
                            229-366-9097
                        </Typography>
                    </Grid>
                    <Grid size={6}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{ marginBottom: 1 }}>
                                <IconButton size='large' onClick={() => { window.open("https://github.com/epham001") }}>
                                    <GitHubIcon fontSize='large' />
                                </IconButton>
                                <IconButton size='large' onClick={() => { window.open("https://www.linkedin.com/in/ethanmpham/") }}>
                                    <LinkedInIcon fontSize='large' />
                                </IconButton>

                            </Box>
                            <Typography variant='caption'>
                                © 2025 Ethan Pham. All rights reserved.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size='grow'>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;