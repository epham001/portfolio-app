import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Chess() {
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
          Chess
        </Link>

      </Breadcrumbs>

      <Typography variant="h5" gutterBottom>Chess</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        After my first year as a computer science student at UGA, I wanted to practice my programming skills beyond the 
        classroom. I decided to recreate a classic game I really enjoy playing: Chess. I knew this project would present 
        its own unique challenges and force me to solve problems creatively. At the time, the main tool I had at my disposal 
        was JavaFX, which we had used in CS 1302 (Software Development) as an introduction to object-oriented programming 
        with a simple UI framework.
      </Typography>

      <Typography sx={{ marginBottom: 4 }}>
        I approached the project with a strong focus on object-oriented design and separated the game logic from the visuals. 
        The app itself handled user interactions, mouse events, and updates to the game state, while the <code>ChessGame</code> object 
        contained all the rules and logic. I represented the board with a 2D array of <code>GamePiece</code> objects. Each piece was an 
        extension of an abstract <code>GamePiece</code> class, which defined common methods like <code>isValidMove()</code> and <code>isBlockable()</code>. 
        Subclasses such as Pawn, Rook, and Knight overrode these methods with their unique movement rules.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        When a user selected a piece, the program checked the piece’s <code>isValidMove()</code> function against the target position before 
        allowing the move. I implemented piece movement for all standard pieces, which often required carefully mapping out moves 
        on paper—especially for knights, diagonals, and blockable moves. Although I never finished implementing things 
        like checking, castling, or en passant, I handled all basic movement and turn-taking between black 
        and white.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='chess.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        This was my first personal project, and it gave me a chance to problem-solve independently. I often had to step back, 
        write out my ideas, and think through the logic from a higher level. Using an abstract class for <code>GamePiece</code> felt like 
        a perfect use case for inheritance and reinforced my understanding of object-oriented programming. While the project 
        remains unfinished, I’m proud of the structure and logic I built, and it motivated me to continue working on more 
        personal projects in the future.
      </Typography>

    </Container>




  );
}

export default Chess;
