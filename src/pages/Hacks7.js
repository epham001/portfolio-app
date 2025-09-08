import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Hacks7() {
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
          UGA Hacks 7
        </Link>

      </Breadcrumbs>

      <Box sx={{ marginBottom: 4 }}>
        <img src='ugahacks7.jpg ' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>
      <Typography variant="h5" gutterBottom>UGA Hacks 7</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        UGA Hacks is a student-run hackathon hosted by the Association for Computing Machinery (ACM), a club for all things compter 
        science related at the University of Georgia. The two-day event brings together students for workshops, activities, and, of course, 
        the main hackathon, where teams build a project in less than 48 hours. There are many categories you can win prizes in, and they have 
        different prizes funded by different sponsors. The sponsors for this year were NCR, Black Rock, Global Payments, Capital One, 
        StateFarm, Deloitte, Figma, Credera, AWS, Digital Ocean, stickermule, echo3D, and MLH. The theme for this year was retro.
      </Typography>

      <Typography variant="h5" gutterBottom>Run The World</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        This was my first hackathon, and my team of four came in with very little experience — we had only completed two computer science 
        classes at the time, including CS1302: Software Development, where we learned object-oriented programming in Java and how to build 
        graphical applications using JavaFX. (JavaFX is a framework for creating GUI applications in Java, with support for elements like 
        buttons, text, and images.) Knowing our limitations, we wanted to create something simple but meaningful. We first considered basic 
        games like Minesweeper or Snake, but decided we wanted a project with more depth. Inspired by the game Reigns, we landed on building 
        a choice-based strategy game that would also align with BlackRock’s sustainability category. We called our game Run the World, a 
        text-based, binary-decision strategy game where the player acts as a leader trying to balance three key aspects of society: 
        Environment, Economy, and Society.
        <ul className="list-disc pl-10 m-0">
          <li>Players are presented with prompts (or “cards”) asking them to make a decision, such as whether to support electric cars.</li>
          <li>Each choice increases one aspect while decreasing another. For example, supporting electric cars improves the Environment but negatively impacts the Economy.</li>
          <li>If any aspect drops to zero, the player loses.</li>
          <li>As the game progresses, the consequences scale, making it harder to keep all three aspects balanced.</li>
        </ul>
        We designed the game around a seed file containing prompts and their corresponding effects on the three aspects. These were stored 
        as Card objects, shuffled into a “deck,” and displayed to the player. The main game loop randomly presented cards, processed choices, 
        and updated the values. I implemented the main game loop and built the JavaFX interface, which included two buttons for the player’s 
        binary choices (Yes/No), three value displays for tracking the aspects, and a simple text-based prompt display. 
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Although the game itself was simple, it was exactly the kind of project we needed for our first hackathon. It pushed us to apply 
        what little we knew, think creatively within constraints, and work collaboratively under pressure. More importantly, it sparked 
        my interest in hackathons and collaborative coding, setting the stage for the projects I would build at future events. You can
        check out the project on 
        <Link underline="hover" onClick={() => { window.open("https://devpost.com/software/run-the-world-2v8wcr") }}> Devpost</Link>. 
      </Typography>



    </Container>




  );
}

export default Hacks7;
