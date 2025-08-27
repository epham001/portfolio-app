import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Distributed() {
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
          Distributed Systems
        </Link>

      </Breadcrumbs>
      <Typography variant="h5" gutterBottom>Distributed Computing Systems</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        At the University of Georgia, I took a course on Distributed Computing Systems, which are defined as collections of independent 
        computers that work together as a unified system. This class introduced me to foundational concepts in concurrency, synchronization, 
        and distributed design. Here are some core topics I learned:
        <ul>
          <li>Multi-threaded programming - writing programs that execute across multiple threads for better performance</li>
          <li>Synchronization Tools – semaphores and mutexes to safely share resources between threads</li>
          <li>WebSocket Programming – enabling real-time communication between clients and servers</li>
          <li>Resource Locking/Unlocking – preventing conflicts when multiple processes or users access the same resource</li>
        </ul>
      </Typography>

      <Typography variant="h5" gutterBottom>Projects</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Throughout the course, I applied these concepts in several practical projects. The first project was a <StyledStrong>messaging broker system </StyledStrong> 
        which functioned like a group chat server. Users could subscribe to receive messages in real time, and if a user disconnected and later reconnected, they 
        would see the history of messages saved to a log. Users also had the option to unsubscribe, which stopped new messages from being delivered and removed their 
        stored history. 
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Another project I completed was building a <StyledStrong>File Transfer Protocol (FTP) server</StyledStrong>, which acted as a centralized remote file system. 
        The system supported uploading, editing, and deleting files. The main challenge was handling concurrent actions when multiple users attempted to access the same file. 
        To solve this, I implemented synchronization controls such as locks, ensuring that data remained consistent even with simultaneous file operations.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        For my final project, I implemented a distributed data store using <StyledStrong>consistent hashing</StyledStrong>. Consistent hashing is a technique 
        for distributing keys across nodes in a cluster in a way that minimizes data movement when nodes are added or removed. Unlike traditional hashing methods, 
        which often require remapping most of the keys after a change, consistent hashing only reassigns keys that fall within the range of the affected node. This makes the 
        system scalable and fault tolerant, as it can handle dynamic membership changes while keeping the majority of data stable. Building this project 
        gave me insight into how distributed databases and caching systems maintain performance and reliability across large networks.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='consistent_hashing.jpg' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        Overall, this course gave me a strong foundation in both the theory and practice of distributed systems. It taught me how to coordinate threads, safely 
        manage shared resources, and design systems that remain reliable under concurrency and scale.
      </Typography>

    </Container>




  );
}

export default Distributed;
