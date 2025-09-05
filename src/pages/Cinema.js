import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, createTheme, Link, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//breakcrumb stuff
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Carousel, IconButton } from "@material-tailwind/react";

const StyledStrong = styled('strong')(({ theme }) => ({
  color: '#FFFFFF',
}));

function Cinema() {
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
          Cinema E-Booking
        </Link>

      </Breadcrumbs>

      <Typography variant="h5" gutterBottom>Software Engineering </Typography>
      <Typography sx={{ marginBottom: 4 }}>
        At the University of Georgia, I took a course in Software Engineering, which was designed to teach the complete lifecycle of
        building a full-stack application—from requirements gathering to deployment. The class emphasized object-oriented design,
        UML modeling, design patterns, testing strategies, and agile methodologies. A major focus of the course was learning how
        to develop reliable and maintainable software in a collaborative, team-based environment.
      </Typography>

      <Typography variant="h5" gutterBottom>Cinema E-Booking Website</Typography>
      <Typography sx={{ marginBottom: 4 }}>
        The centerpiece of the class was a semester-long team project. Over four months, my team of five built a cinema e-booking website
        modeled after commercial platforms like AMC. The system included two distinct views: a customer-facing interface for browsing and
        purchasing tickets, and an admin-facing interface for managing the system. Throughout the project we followed an agile process,
        writing user stories, creating UML diagrams, and presenting regular demos of our deliverables.
      </Typography>

      <Typography sx={{ marginBottom: 4 }}>
        My primary responsibility was developing the admin view and its associated functionality. This included implementing full CRUD
        operations (create, read, update, delete) for movies, bookings, and accounts. On the authentication side, I also built the login,
        registration, and password recovery pages. The registration page included additional features such as saving addresses and payment
        information for future use. I designed the frontend using React with TypeScript and Material UI, ensuring consistency with the rest
        of the application.
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="register.png"
            alt="register"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
          <img
            src="account_info.png"
            alt="account_info"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
          <img
            src="account_info2.png"
            alt="account_info2"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
          <img
            src="account_info3.png"
            alt="account_info3"
            className="h-[300px] lg:h-[600px] w-full object-cover object-top"
          />
          <img
            src="account_info4.png"
            alt="account_info4"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
          <img
            src="add_movie.png"
            alt="add_movie"
            className="h-[300px] lg:h-[600px] w-full object-cover object-left"
          />
          <img
            src="admin.png"
            alt="admin"
            className="h-[300px] lg:h-[600px] w-full object-cover object-left"
          />
          <img
            src="checkout.png"
            alt="checkout"
            className="h-[300px] lg:h-[600px] w-full object-cover object-left"
          />
          <img
            src="create_account.png"
            alt="create_account"
            className="h-[300px] lg:h-[600px] w-full object-cover object-top"
          />
          <img
            src="create_account4.png"
            alt="create_account4"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
          <img
            src="order_history.jpg"
            alt="order_history"
            className="h-[300px] lg:h-[600px] w-full object-cover object-left"
          />
          <img
            src="save_card.png"
            alt="save_card"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
          <img
            src="save_card2.png"
            alt="save_card2"
            className="h-[300px] lg:h-[600px] w-full object-cover object-center"
          />
        </Carousel>
      </Box>

      <Typography sx={{ marginBottom: 4 }}>
        On the backend, we used Django with a PostgreSQL database. I collaborated closely with a teammate who created many of the backend
        endpoints. I tested these endpoints using Postman before connecting them to the frontend through GET and PUT requests. In some cases,
        I developed my own endpoints when the frontend required functionality beyond what had already been built. This process of iterating on
        the frontend and backend together gave me valuable experience in integrating a complete stack and debugging data flow across layers.
      </Typography>

      <Typography sx={{ marginBottom: 4 }}>
        This project reinforced the principles of the course by requiring us to practice every step of the software development cycle:
        requirements analysis, design, implementation, and testing. It also provided practical experience with agile development, team
        collaboration, and managing a codebase over the course of several months. By the end of the semester, we had a fully functional
        cinema booking platform and a much deeper understanding of how real-world software projects are built and maintained.
      </Typography>

    </Container>




  );
}

export default Cinema;
