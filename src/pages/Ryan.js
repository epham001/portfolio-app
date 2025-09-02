import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Ryan() {
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
          Ryan LLC
        </Link>

      </Breadcrumbs>
      <Typography variant="h5" gutterBottom>Ryan LLC</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        In the summer of 2023, I worked at Ryan LLC as an Innovation Lab Intern. Ryan is a global tax services and software provider, 
        specializing in business tax consulting, compliance, and automation solutions that help clients minimize tax burdens and streamline 
        processes.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <img src='ryanllc.jpg' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography variant="h5" gutterBottom>The Innovation Lab</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        The Innovation Lab is a team within Ryan dedicated to building tools, automations, and rapid solutions for both consultants and clients across 
        various tax practice areas. The group primarily leverages platforms such as Alteryx, and Automation Anywhere 360.
        <ul className="list-disc pl-10 m-0">
          <li>Alteryx is a low-code/no-code data analytics and automation platform that enables users to design workflows, clean and transform data, 
            perform advanced analytics, and integrate APIs — all without writing large amounts of code.</li>
          <li>Automation Anywhere 360 is a Robotic Process Automation (RPA) platform used to automate repetitive business processes, such as data entry 
            and system integration, through software bots.</li>
        </ul>
        Before starting the internship, I attended an onboarding retreat at Ryan’s Dallas headquarters, where I trained with several hundred other interns 
        on various tax practice areas and tools. Following that, I worked out of the Atlanta office, where our first week included focused training sessions 
        on Alteryx, Automation Anywhere 360, and Power BI. Afterward, I joined the Global Data Strategy team, where I worked on projects to design, optimize, 
        and deploy automation workflows.
      </Typography>

      <Typography variant="h5" gutterBottom>The Global Data Strategy Team</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        I collaborated with my team to build Alteryx workflows, macros, and custom tools that automated data transformations for clients and internal 
        practice areas. These solutions reduced manual processing times from days to seconds. For example, I created an Alteryx workflow that took 
        an Excel file of subsidiaries as input to perform calculations, group data, and transform it into a client-ready format — a process that would have 
        otherwise required tedious manual effort. An advantage of Alteryx is reusable solutions, capable of processing entire folders of files at 
        once. Another neat feature are custom tools that utilize scripts for more specific data transformation. I had the pleasure of working with python 
        scripts for more advanced use cases.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        One of my major contributions was developing an Alteryx workflow integrated with Azure OpenAI to accelerate the fixed asset classification process 
        for the Property Tax team. Fixed assets (e.g., furniture, machinery, equipment) each fall under tax-specific categories. By using AI to assist in 
        classification, I helped the team reduce the time and effort spent on this recurring task.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Beyond Alteryx, I also implemented a React web application to streamline the Value-Added Tax (VAT) reclaim process. The app integrated AWS Textract 
        to extract structured data from scanned receipts. Textract returned a JSON containing recognized text, labels, and coordinates, which I used to:
        <ul className="list-disc pl-10 m-0">
          <li>Auto-populate fields such as Vendor Name or Total Amount.</li>
          <li>Display receipts in a custom PDF viewer with clickable highlights around recognized text.</li>
          <li>WebSocket Programming – enabling real-time communication between clients and servers</li>
          <li>Allow users to correct or reassign extracted values by clicking text on the receipt and assigning it to a desired field.</li>
        </ul>
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='ryan_retreat.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        My time at Ryan was an incredible experience. As my very first internship in a professional setting, I’m proud of what I was able to accomplish 
        alongside my colleagues. One of the biggest skills I developed over the summer was collaboration. There were many one-on-one meetings scheduled 
        throughout the day on Teams — some focused on projects, and others simply to connect and get to know people. I truly felt like I was part of a 
        team, and I saw firsthand the power of what a group can achieve when everyone works together.
      </Typography>

    </Container>




  );
}

export default Ryan;
