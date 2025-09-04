import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Hacks8() {
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
          UGA Hacks 8
        </Link>

      </Breadcrumbs>

      <Box sx={{ marginBottom: 4 }}>
        <img src='ugahacks8.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>
      <Typography variant="h5" gutterBottom>UGA Hacks 8</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        UGA Hacks is a student-run hackathon hosted by the Association for Computing Machinery (ACM), a club for all things
        compter science related at the University of Georgia. The two-day event brings together students for workshops, activities,
        and, of course, the main hackathon, where teams build a project in less than 48 hours. There are many categories
        you can win prizes in, and they have different prizes funded by different sponsors. The sponsors for this year were MLH, BlackRock,
        State Farm, HPCC Systems, brooksource, Digital Ocean, echo3D, and Centered. The theme for this year was travel, and it inspired us
        to create an application that connects people. 
      </Typography>

      <Typography variant="h5" gutterBottom>TappedIn</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Our original idea was to create a rideshare program for people going to common-interest events. Instead of “drivers” like Uber, 
        users would just volunteer to give rides. Pretty quickly, we realized this would take too much time for a 48-hour hackathon and 
        wasn’t really necessary since people can already coordinate carpooling. A possible future step would be to include a chat system 
        to handle that coordination, but for now we decided to focus on something we could finish: an event planner/organizer app. The 
        central idea was still travel and discovery, but framed around local events and common interests. With our app, users could plan 
        an event, attend an event, and create a profile that highlighted their hobbies.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Our team had six people: two on backend, three on frontend, and one on UI/UX. I was in charge of the backend, while my partner 
        set up the database and populated it with dummy data for the demo. Since I’d done full-stack work before, we thought this would 
        be a good chance to push ourselves further. We built it as a mobile app using React Native, which was new to most of us. We also 
        used MongoDB Atlas, a cloud database service that makes it easy to store and access data from anywhere. I set up a simple Node.js 
        server with Express and Axios to handle requests and connected it to Atlas. I used Postman to test the endpoints and debug the 
        connection — which was tricky since it was my first time using a cloud-hosted database — but after some troubleshooting, I got it 
        working and was able to switch gears to help the frontend team. On the frontend, we used Expo Go, which let us test the app on our 
        phones by scanning a QR code.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='mongoDB_winners.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        In 48 hours and on less than five hours of sleep, we had a functioning app that we demoed for the judges Sunday morning (we managed 
        to squeeze in a quick nap just moments before the demo, of course). We attended the final event where the winners were announced and 
        prizes were distributed. To our surprise, we won Best Use of MongoDB, sponsored by MLH. This was the first time our team had ever won 
        anything at a hackathon, and we were shocked, tired, but very excited nonetheless. Needless to say, I am very proud of myself and 
        everyone on this team for what I consider to be a very successful hackathon. Please check out TappedIn on 
        <Link underline="hover" onClick={() => { window.open("https://devpost.com/software/tappedin") }}> Devpost</Link>. 
        Here you can view a demo video of our project and the other hackers that worked on this project.
      </Typography>

    </Container>




  );
}

export default Hacks8;
