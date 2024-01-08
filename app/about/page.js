"use client";
import React from 'react';
import { Container, Typography, Button, Paper, Grid, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from "../../public/images/profile/pic1.png"; // Import your profile image

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const pageTransition = {
    type: 'tween',
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 3, marginTop: 4, textAlign: 'center' }}>
          <Avatar alt="Your Name" src={profileImage} sx={{ width: 150, height: 150, margin: '0 auto' }} />
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Hi, I&apos;m [Your Name], a passionate web developer with a love for
            creating elegant and functional websites.
          </Typography>
          <Typography variant="body1" paragraph>
            I have experience in front-end and back-end development using
            technologies such as React, Node.js, and Express. My goal is to
            provide clean, maintainable code and create user-friendly web
            experiences.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={2}>
            {/* Skills icons or labels */}
            {/* Add icons or labels for your skills */}
          </Grid>
          <Typography variant="body1" paragraph>
            In addition to my technical skills, I&apos;m a creative problem solver
            and a team player. I&apos;m always eager to learn and adapt to new
            technologies.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" paragraph>
            Feel free to reach out to me if you have any questions or
            opportunities for collaboration.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:youremail@example.com"
          >
            Email Me
          </Button>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default About;
