import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Snake() {
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
          Snake
        </Link>

      </Breadcrumbs>

      <Typography variant="h5" gutterBottom>React</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        At this point in my career I had completed three semesters at UGA and three computer science classes, I realized I needed to expand
        my toolkit beyond coursework. My first hackathon and the fall career fair made it clear: I needed a skill that was practical, popular,
        and flexible — something I could use both creatively and professionally. That’s when I chose to learn React. That summer, I started learning
        React by reading the documentation and completing their classic tic-tac-toe tutorial. Once I was finished, I challenged myself with a slightly
        more complex project that I could build from scratch. To solidy everything I learned (and practice), I decided to recreate the classic game Snake.
      </Typography>

      <Typography variant="h5" gutterBottom>Snake</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        At the time, React’s official documentation still focused on class components, since Hooks were still relatively new and experimental.
        So I built my first React project the “old-school” way with component classes. Today, I use Hooks almost exclusively, but I decided
        starting with class-based components since it is familiar. The Snake game came with two major challenges: visuals and game logic. To
        manage the logic, I wrote a standalone Game class in a separate JavaScript file. This class tracked the entire game state — snake
        position, food, direction, and whether the game was over. I instantiated the Game class inside my React app, then repeatedly called
        its move() function using setInterval(). React’s job was simply to re-render the board based on the current state of the Game object,
        while inputs like arrow keys updated the snake’s direction. This separation between logic and visuals made the project much simpler to
        implement.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <img src='snake.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>
      <Typography sx={{ marginBottom: 4 }}>
        One of the most important lessons I learned while building Snake came directly from React’s documentation: Lifting State Up. In short, lifting
        state up means storing shared state in a common parent component, then passing it down as props. This avoids duplication and keeps components
        in sync since often several components need to reflect the same changing data. This principle has stayed with me, and I’ve applied it to nearly
        every React project since. Snake was a relatively small project, but it was my first real step into React development. It showed me how React
        could be both a creative outlet and a practical skill. More importantly, it gave me the confidence to take on bigger projects and cemented my
        interest in building interactive applications on the web. I will go on to use React in many future projects including my first internship and
        my first job.
      </Typography>

    </Container>




  );
}

export default Snake;
