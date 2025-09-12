import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Discord() {
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
          Discord Bot
        </Link>

      </Breadcrumbs>

      <Box sx={{ marginBottom: 4 }}>
        <img src='discord_banner.jpg' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>
      <Typography variant="h5" gutterBottom>Discord</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        During the winter of 2021, I felt inspired to create something again. I’ve been a long-time user of Discord — I joined in 2015, 
        just a few months after it launched. Discord is a free voice, video, and text communication platform originally designed for gamers 
        but now used by communities of all kinds. It quickly replaced older platforms like Skype and TeamSpeak by offering smoother voice 
        chat, better performance, and community-driven features. Over the years, it’s grown into one of the most popular platforms for all 
        kinds of groups, from gaming to clubs to professional teams. One of the coolest features of Discord is that you can create your own 
        bots. Bots can automate tasks or add custom functionality to servers. They can do things like track server activity, manage roles 
        and permissions, handle moderation, run polls, play music in voice channels, log chats, or provide notifications. I enjoy the 
        outlet of creativity here, and that is what led to me creating my own bot.
      </Typography>

      <Typography variant="h5" gutterBottom>BMO Bot</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Since I had just finished Software Development (CS1302) in Java, I decided to implement my bot in a language I was most comfortable 
        with. I used the Java Discord API (JDA), an open-source library for building bots. My first goal was just to get an end-to-end 
        connection — something that proved my bot was alive, listening for events, and responding. To test this, I wrote a simple echo 
        command that repeated any text the user typed after it. From there, I started having fun with basic commands. I tested them in my 
        private server, and eventually asked a few friends if I could add the bot to their servers too. It was cool seeing people interact 
        with commands I made, but I wanted something more interactive. That’s when I decided to build a Trivia Game.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        I found an open-source trivia API called OpenTDB. I could send a request and it would return trivia questions, multiple-choice 
        answers, and as well as the correct answer in JSON format. I could customize the queries by category or difficulty, which was 
        perfect for variety. The game flow was simple: when a user invoked the trivia command, my bot would query OpenTDB, get a question, 
        shuffle the answers, and present them in Discord. But first there were some challenges I had to solve:
        <ul className="list-disc pl-10 m-0">
          <li>To design the interface, I had to dig deep into JDA’s documentation to find the right embeds, buttons, and styles.</li>
          <li>I didn’t want other users answering someone else’s trivia, so I tied each question to a user ID.</li>
          <li>I only allowed one active question per user. If someone were to spam trivia commands, this could lead to memory issues</li>
          <li>I needed to find somewhere to host my bot so that it can run 24/7</li>
        </ul>
        To handle this, I created a trivia Question object for each user that tracked their active game. This object would keep the user's id,
        and I would store these objects in a list. For every trivia command that is invoked, I would first check the list to see if an active game exists.
        If it does, I would replace it. Upon a game resolving, (a question being answered) that game object would be removed from the list. Finally,
        I deployed my bot to Heroku. At the time, they offered free hosting for most of the month (it would just go down during the last 
        week). Unfortunately, Heroku later removed their free tier, so my bot isn’t currently online.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='bmo_example.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        I named my bot BMO after my favorite silly robot cartoon character. This ended up being one of my favorite projects. While it didn’t 
        introduce any useful, new frameworks or tools, but it reinforced so many 
        fundamentals of computer science: Reading and navigating Java documentation, object-oriented programming, working with multiple APIs,
        deployment and learning about hosting services, and most importantly feedback. The end result was a fun, working trivia game that my 
        friends could enjoy. Seeing people actually use something I built (and even laugh at the occasional hidden bug) was incredibly rewarding. 
      </Typography>

    </Container>




  );
}

export default Discord;
