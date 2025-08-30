import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Hacks9() {
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
          UGA Hacks 9
        </Link>

      </Breadcrumbs>

      <Box sx={{ marginBottom: 4 }}>
        <img src='ugahacks9.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>
      <Typography variant="h5" gutterBottom>UGA Hacks 9</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        UGA Hacks is a student-run hackathon hosted by the Association for Computing Machinery (ACM), a club for all things 
        compter science related at the University of Georgia. The two-day event brings together students for workshops, activities, 
        and, of course, the main hackathon, where teams build a project in less than 48 hours. There are many categories 
        you can win prizes in, and they have different prizes funded by different sponsors. The sponsors for this year were State Farm, 
        Capital One, HPCC Systems, AI Futures, UGA, MLH, echo3D, and O'Reilly. The theme for this year was superheroes, which 
        inspired my team of four to try to make a video game, something we all love to play but have never really thought about making before.
      </Typography>

      <Typography variant="h5" gutterBottom>Byte Fight</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        In preparation, I spent the month prior learning the basics of Unity through YouTube tutorials and through Unity's student 
        free trial plan. I taught myself about controls, hitboxes, animation, and some basic Unity built-in Unity tools. Since we 
        were on a time crunch, our team set out to create a minimum viable product for a simple game. In order to have something 
        playable by the deadline we set these requirements: 
        <ul className="list-disc pl-10 m-0">
          <li>One verses one, two players sharing a keyboard</li>
          <li>At least one attack per character</li>
          <li>A single main platform</li>
          <li>A game mechanic that determines the winner</li>
        </ul>
        Playing on the same keyboard is necessary since we didn't want to have to worry about sending game data over a UDP 
        connection for the real time aspect of our game. We needed a game mechanic that allows the game to end. We took inspiration 
        from Super Smash Bros. — each hit increased knockback until a final strike sent the player off the main platform deciding the victor.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        We named our hero Byte the Dog (UGA Hacks’ mascot) and our villain Bug the Cat (a nightmare to all programmers). 
        I created sprite animations for Bug using Piskel, drawing each frame by hand with references of cats in motion. After exporting 
        these into Unity, I paired the animations with player controls for idle, run, jump, and attack states. To handle knockback, we 
        programmed a trigger when hitboxes overlapped that applied a new velocity to the player, scaled up with each hit received.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        To polish the game beyond the minimum requirements, we implemented several extra features. We added a parallax scrolling 
        effect with three layered backgrounds to create a sense of depth. The camera was programmed to track both characters, 
        centering on their average position and dynamically zooming in or out as they moved closer or farther apart. With sound 
        effects, background music, a title screen, and percentage counters for knockback, the game felt complete.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <img src='bugvsbyte.jpg' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        After a sleepless weekend, we finished and submitted our project on time. The result was a fun, working 2D fighting game 
        that we were proud to demo to the judges and other participants. Beyond the technical lessons, this project taught me how 
        to scope, prioritize, and collaborate under tight deadlines, while also sparking my interest in game development. Check out 
        Byte Fight on <Link underline="hover" onClick={() => { window.open("https://devpost.com/software/byte-fight") }}>Devpost</Link>. 
        Here you can view a demo video of our project and the other hackers that worked on this project. Please check them out, I could not
        have done this alone. 
      </Typography>

    </Container>




  );
}

export default Hacks9;
