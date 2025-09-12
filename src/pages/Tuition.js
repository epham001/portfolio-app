import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Tuition() {
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
          Tuition Data Viewer
        </Link>

      </Breadcrumbs>

      <Typography variant="h5" gutterBottom>Database Management Systems</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        During my time at UGA, I took a class on Database Management Systems that provided me in depth how databases function under
        the hood. We covered relational and non-relational databases, relational logic and algebra, SQL queries, hashing and key storage,
        concurrency (read/write locks), and normalization. Beyond the theory, the class emphasized applying this knowledge through a
        term project.
      </Typography>

      <Typography variant="h5" gutterBottom>Tuition Data Viewer</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Our team of three set out to build a full-stack web application that made meaningful use of a database. We had only 2 requirements
        First, we had to have more than just a simple query. Second, we had to do something with the data that is beyond simply displaying it.
        We chose to work with a tuition dataset from Kaggle, which tracked the cost of college tuition over time. In our application, users can:
        <ul className="list-disc pl-10 m-0">
          <li>View tuition trends graphed over time (cost in thousands vs. year).</li>
          <li>Apply filters, such as 2-year vs. 4-year degree programs, in-state vs. out-of-state tuition, specific states, and whether to include fees, tuition, or room/board.</li>
          <li>See future cost projections, allowing them to visualize tuition trends years ahead.</li>
        </ul>
        I was responsible for downloading the Kaggle dataset, and importing it into our local MySQL database. I configured the backend
        using Java Spring Boot and tested connections through MySQL Workbench. Using workbench, I made direct queries, added dummy data,
        and confirmed a request/response flow. For the frontend I added interactive graphs and selectors using Ant Design and Ant Design Charts,
        allowing users to filter the data.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='tuition_data_viewer.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        The project gave me a much stronger appreciation for the formal principles of database systems and how they translate into real
        applications. While I had worked with databases before, this class helped me understand what was happening beneath the surface —
        from hashing and key management to normalization and transaction handling. By the end, we had a fully functional data-driven app
        that combined backend data with an interactive frontend interface.
      </Typography>

    </Container>




  );
}

export default Tuition;
