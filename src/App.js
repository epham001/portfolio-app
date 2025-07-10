// src/App.js
import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Avatar, createTheme, ThemeProvider, Grid, Paper, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//imports for card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Dark gray background
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

function App() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        {/* Top Profile Section */}
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
            alt="Your Name"
            src="/profile.jpg" // Replace with your image path
            sx={{ width: 100, height: 100, marginRight: 3 }}
          />
          <Box>
            <Typography variant="h4">Ethan Pham</Typography>
            <Typography variant="subtitle1">Software Developer | BS @ University of Georgia </Typography>
          </Box>
        </Box>

        {/* Content Section */}
        <Container sx={{ py: 5 }}>
          <Typography variant="h5" gutterBottom>About Me</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography sx={{ marginBottom: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Typography variant="h5" >Work Experience & Projects</Typography>
          

          <Box sx={{ py: 5, flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Card >
                  <CardActionArea sx={{height: '100%'}}>
                    <CardMedia
                      component="img"
                      image="robinsAFB.JPG"
                      alt="robinsAFB.JPG"
                      sx={{
                        width: '100%',       // Optional: match card width
                        height: 200,         // Fixed height
                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        402nd SWEG
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Sep 2024 — Jun 2025 | Software Engineer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="ugahacks9.jpg"
                      alt="ugahacks9.jpg"
                      sx={{
                        width: '100%',       // Optional: match card width
                        height: 200,         // Fixed height
                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        UGA Hacks 9
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Feb 2024 | Hackathon
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="uga.jpg"
                      alt="uga.jpg"
                      sx={{
                        width: '100%',       // Optional: match card width
                        height: 200,         // Fixed height
                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cinema E-booking Site
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Aug 2023 — Dec 2023 | Class Project
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="ryanllc.jpg"
                      alt="ryanllc.jpg"
                      sx={{
                        width: '100%',       // Optional: match card width
                        height: 200,         // Fixed height
                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Ryan LLC
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Jun 2023 — Sep 2023 | iLab Intern
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="ugahacks8.png"
                      alt="ugahacks8.png"
                      sx={{
                        width: '100%',       // Optional: match card width
                        height: 200,         // Fixed height
                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        UGA Hacks 8
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Feb 2023 | Hackathon 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="ugahacks7.jpg"
                      alt="ugahacks7.jpg"
                      sx={{
                        width: '100%',       // Optional: match card width
                        height: 200,         // Fixed height
                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        UGA Hacks 7
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Feb 2022 | Hackathon 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>  
          </Box>
        </Container>
        {/* Bottom Contact Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          borderTop: '1px solid #333',
        }}>
          <Typography>
            © 2025 Your Name. All rights reserved.
          </Typography>
          <GitHubIcon />
          <LinkedInIcon />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

