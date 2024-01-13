"use client";
import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import NavBar from "../NavBar";

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const pageTransition = {
    type: "tween",
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
      <NavBar/>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{ padding: 3, marginTop: 4, textAlign: "center" }}
        >
          <Avatar
            alt="David D. Chen"
            src="/images/profile/pic1.png"
            sx={{ width: 150, height: 150, margin: "0 auto" }}
          />
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Hello! I&apos;m David D. Chen, a multidisciplinary professional with a
            background in both the medical sciences and computer science. I&apos;m
            currently pursuing a Medical Degree at the University of
            Washington&apos;s School of Medicine and hold a B.S. in Biology and a
            B.A. in Computer Science from Duke University.
          </Typography>
          <Typography variant="body1" paragraph>
            My technical expertise includes web application development, machine
            learning, laboratory techniques in developmental and molecular
            biology, and computational biology data analysis. I&apos;m fluent in
            English and Mandarin, and adept in multiple programming languages.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Experience
          </Typography>
          <Typography variant="body1" paragraph>
            I have gained valuable experience as a Graduate Researcher at the
            Fred Hutchinson Cancer Center, contributing to significant research
            projects. My role as a Software Engineer at EZTrain LLC involves
            developing a web application for the U.S. Air Force Reserve and EMS
            divisions. I&apos;ve also interned at Regeneron Pharmaceuticals, focusing
            on data management and algorithm development.
          </Typography>
          <Typography variant="body1" paragraph>
            In addition to my technical and research roles, I&apos;ve held positions
            as a Technical Officer at the Medical Student Association, Student
            Chair at medSTAT, and as a Teaching Assistant in Duke University&apos;s
            Computer Science Department.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" paragraph>
            I&apos;m open to discussing opportunities for collaboration or any
            queries you might have. Reach out to me at davidchen1337@gmail.com
            or connect with me on LinkedIn.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="mailto:davidchen1337@gmail.com"
          >
            Email Me
          </Button>
        </Paper>
      </Container>
    </motion.div>
  );
};

export default About;
