// src/Home.js
import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Avatar, createTheme, ThemeProvider, Grid, Paper, Link, Icon } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

//imports for card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const StyledStrong = styled('strong')(({ theme }) => ({
    color: '#FFFFFF',
}));

function Home() {

    const matches = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate();

    return (

        <Container maxWidth='custom' sx={{ py: 5 }}>
            <Typography variant="h5" gutterBottom>About Me</Typography>
            <Typography sx={{ marginBottom: 8 }}>
                Hi, I’m <StyledStrong>Ethan Pham</StyledStrong> — a recent graduate with a Bachelor of Science in Computer Science from the University of Georgia <br /><br />
                Throughout my academic and professional career, I have worked extensively with modern web technologies including Javascript, React,
                and Node.js building full-stack applications with responsive, user-focused interfaces. I’m always excited to tackle new challenges and
                grow alongside other curious, impact-driven developers. <br /><br />
                Some of my recent work includes:
                <ul>
                    <li>Designing and developing a containerized project tracker for the U.S. Air Force</li>
                    <li>Automating document processing pipelines with Alteryx and web applications for Ryan LLC</li>
                </ul>
                Outside of work, I’m a board game nerd, gym goer, and a proud parent of an orange cat named Donut. <br></br>
                Thanks for visiting — feel free to explore my projects or get in touch!
            </Typography>

            <Typography variant="h5" >Work Experience & Projects</Typography>


            <Box sx={{ py: 5, flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card >
                            <CardActionArea onClick={() => { navigate('/402nd-sweg') }}>
                                <CardMedia
                                    component="img"
                                    image="robinsAFB.JPG"
                                    alt="robinsAFB.JPG"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
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
                        <Card >
                            <CardActionArea onClick={() => { navigate('/distributed-systems') }}>
                                <CardMedia
                                    component="img"
                                    image="uga.png"
                                    alt="uga.png"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Distributed Systems
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Sep 2024 — Jun 2025 | Class Projects
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card>
                            <CardActionArea onClick={() => { navigate('/uga-hacks9') }}>
                                <CardMedia
                                    component="img"
                                    image="ugahacks9.jpg"
                                    alt="ugahacks9.jpg"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        UGA Hacks 9
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Feb 2024 | Hackathon <br /> &nbsp;  
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card>
                            <CardActionArea onClick={() => { navigate('/cinema-e-booking-site') }}>
                                <CardMedia
                                    component="img"
                                    image="register.png"
                                    alt="register.png"
                                    sx={{
                                        width: '100%',       // Optional: match card width
                                        height: 200,         // Fixed height
                                        objectFit: 'cover',  // Ensures image fills the box and crops if needed
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Cinema E-booking
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
                            <CardActionArea onClick={() => { navigate('/ryanllc') }}>
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
                            <CardActionArea onClick={() => { navigate('/uga-hacks8') }}>
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
                            <CardActionArea onClick={() => { navigate('/tuition-data-viewer') }}>
                                <CardMedia
                                    component="img"
                                    image="tuition_data_viewer_early.png"
                                    alt="tuition_data_viewer_early.png"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Tuition Data Viewer
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Feb 2023 | Class Project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card>
                            <CardActionArea onClick={() => { navigate('/snake') }}>
                                <CardMedia
                                    component="img"
                                    image="snake.png"
                                    alt="snake.png"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Snake
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        May 2022 | Personal Project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card>
                            <CardActionArea onClick={() => { navigate('/uga-hacks7') }}>
                                <CardMedia
                                    component="img"
                                    image="ugahacks7.jpg"
                                    alt="ugahacks7.jpg"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
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
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card>
                            <CardActionArea onClick={() => { navigate('/discord-bot') }}>
                                <CardMedia
                                    component="img"
                                    image="discord.jpg"
                                    alt="discord.jpg"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Discord Bot
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Dec 2021 | Personal Project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 8, md: 4 }}>
                        <Card>
                            <CardActionArea onClick={() => { navigate('/chess') }}>
                                <CardMedia
                                    component="img"
                                    image="chess.png"
                                    alt="chess.png"
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Chess
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Jun 2021 | Personal Project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}

export default Home;

