import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function AFB() {
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
          402nd SWEG
        </Link>

      </Breadcrumbs>
      <Typography variant="h5" gutterBottom>402nd Software Engineering Group</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Shortly after graduating, I went to work for the Department of Defense at the Air Force base in Warner Robins starting in September 2024. It was here that
        worked until June 2025 marking my time a little under a year. I gained valuable experience in agile methodoligies, frontend, and cloud technologies. 
      </Typography>

      <Box sx={{ marginBottom: 8 }}>
        <img src='robinsAFB.jpg' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography variant="h5" gutterBottom>Team Metrics</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        During my time on the Metrics Team, I worked on a full-stack project management web application designed to facilitate the
        tracking of agile development processes. The app was built to help teams manage metrics, monitor progress, and track
        sprint and scrum operations. My primary responsibilities were focused on frontend development using React.js. I contributed
        to the redesign and implementation of the login, signup, email verification, and password recovery pages. These pages were built
        using Material UI, a widely used component library. The largest feature I worked on was the metrics dashboard page.
        This page provided visualizations of sprint progress, implemented using the Ant Design
        Charts library. Some key features include:
        <ul>
          <li>burn-up and burn-down charts (Ant Design Charts)</li>
          <li>Added selectors for navigating through project → board → sprint</li>
          <li>Implemented date range filters for time-based chart views</li>
        </ul>
        Although I focused mostly on frontend development, I also contributed to the backend when necessary. Our backend was written in
        Python using the Flask framework, and our database was PostgreSQL. In cases where new endpoints were needed to support frontend
        features, I would implement or modify the necessary API routes. These backend contributions strengthened my understanding of how to build
        full-stack features and communicate clearly between frontend and backend layers.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        The team followed a agile methodology. We held daily standups, sprint planning meetings, and regular demos for higher-ups. Each sprint
        involved assigning tickets, estimating story points as a team, and reviewing progress together. We followed a code review policy that
        required at least two developers to approve a merge request before it could be pushed to the main branch. I participated actively in code
        reviews, not only receiving feedback on my own work but also testing and approving others’ code to maintain quality and consistency across
        the codebase.
      </Typography>
      <Typography sx={{ marginBottom: 8 }}>
        One of the most valuable parts of this experience was participating in demo meetings where we showcased our progress to higher-ups and
        received real-time feedback on the product. These meetings helped ground our work in business needs and encouraged us to think not just
        about the technical implementation, but also about user impact and future planning. Working on this team gave me a deep appreciation for
        long-term project development. Unlike academic projects, which often end after a few weeks, this application evolved continuously. I witnessed
        the codebase grow in complexity and saw how team coordination, consistent coding standards, and iterative improvements played a role in its success.
        Most importantly, I gained practical experience collaborating with other developers. This project solidified my interest in building applications
        and taught me how to thrive in a structured development environment.
      </Typography>
      

      <Typography variant="h5" gutterBottom>Team ATLAS</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        ATLAS is a modular, Kubernetes-based platform designed to provide infrastructure and observability tools to teams operating in secure, air-gapped 
        environments. The name “ATLAS” reflects its purpose: supporting other teams by offering both a reliable Kubernetes deployment and ongoing technical 
        support. ATLAS was built with modularity in mind. It starts with a base layer installation consisting of RKE2 (a lightweight Kubernetes distribution) 
        and a private container registry, which is necessary even in isolated, offline (air-gapped) environments. Once the base layer is installed, users can 
        selectively add modules depending on their needs.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <img src='Frame 3.png' style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxWidth: '100%', // Ensures it doesn't overflow
        }} />
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        Example supported modules include:  
        <ul>
          <li>Prometheus – Open-source monitoring system that collects metrics from services and infrastructure</li>
          <li>Istio – A service mesh that provides traffic management, security, and observability for microservices</li>
          <li>Kiali – A visualization tool for Istio that helps monitor service mesh configurations and traffic flow</li>
        </ul>
        All of these tools are open-source, which presents potential security concerns—especially in restricted environments. 
        To address this, ATLAS provides hardened versions of each image to ensure that deployments are secure, reliable, and 
        consistent.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        While on Team ATLAS, I was responsible for both testing and development tasks. I performed what the team called HEROs, a 
        testing cycle that involved spinning up a fresh cluster, installing each ATLAS module individually, verifying runtime behavior, 
        and uninstalling modules cleanly. This process ensured that all modules worked independently and together before any merge 
        requests were approved.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        I developed a new module for ATLAS called the auto-image-uploader. To implement my new feature, I added an Ansible-based 
        automation script during the install process. I also allowed users to provide a list of container images and source locations.
        The script would then automatically upload those images to the private cluster registry. This feature helped streamline image 
        preparation in air-gapped environments, reducing manual work and minimizing human error.
      </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        Working on ATLAS gave me hands-on experience with Kubernetes, Ansible automation, and secure infrastructure practices in restricted 
        environments. It was a great opportunity to get out of my comfort zone and work with tools that I had no prior experience in. This experience
        has taught me more about the cloud computing and technologies broadening my view of computer science.
      </Typography>

    </Container>




  );
}

export default AFB;

