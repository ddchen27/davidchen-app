// use rafce as shortcut for React arrow function
"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AnimatedText from "./AnimatedText";
import { LinkArrow } from "./Icons";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import pic from "../public/images/profile/pic3.png";

const Intro = () => {
  const imageVariants = {
    initial: {
      scale: 0, // Start from a scale of 0 (completely small)
    },
    animate: {
      scale: 1, // Scale to normal size
      transition: {
        type: "tween", // This can be "tween" or "spring" for different effects
        stiffness: 260,
        damping: 20,
        duration: 1
      },
    },
  };
  const firstNameVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const lastNameVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }, // delay for last name
  };

  return (
    <Box sx={{ position: "relative", zIndex: 1}}>
      <Box>
        <motion.div
          className="text-line-1"
          initial="hidden"
          animate="visible"
          variants={firstNameVariants}
          style={{
            position: "relative",
            zIndex: 1,
            top: "200px",
            marginTop: "-250px"
          }} // Adjust '20px' as needed
        >
          <Typography variant="h1" sx={{ ...headlineStyle, ...line1Style }}>
            David
          </Typography>
        </motion.div>
        <motion.img
          src="/images/profile/pic3.png"
          alt="default"
          initial="initial"
          animate="animate"
          variants={imageVariants}
          style={{
            maxWidth: "100%",
            height: "auto",
            position: "relative",
            zIndex: 2,
            left: "1%"
          }}
        />
        {/* Intermediate z-index */}
        <motion.div
          className="text-line-2"
          initial="hidden"
          animate="visible"
          variants={lastNameVariants}
          style={{
            position: "relative",
            zIndex: 3,
            bottom: "200px",
            marginBottom: "-200px",
          }} // Higher z-index
        >
          <Typography variant="h1" sx={{ ...headlineStyle, ...line2Style }}>
            Chen
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

const headlineStyle = {
  position: "relative",
  display: "block",
  fontWeight: 500,
  textTransform: "uppercase",
  fontSize: "23.2vw",
  margin: "-6vw 0 0 -1.3vw",
};

const line1Style = {
  zIndex: 1,
};

const line2Style = {
  zIndex: 3,
  marginTop: "-7.5vw",
};

export default Intro;
