// use rafce as shortcut for React arrow function
"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { LinkArrow } from "./Icons";

import Head from "next/head";
import Image from "next/image";
// import styles from "./styles/Home.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Intro from "./Intro";
import HireMe from "./HireMe";
import HomeLayout from "./HomeLayout";
import profilePic from "../public/images/profile/pic1.png";

import { Avatar, Button, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Home() {
  const avatarStyle = {
    width: { xs: "30vw", sm: "20vw", md: 150 },
    height: { xs: "30vw", sm: "20vw", md: 150 },
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <main>
      <NavBar />
      <div className="flex items-center text-dark w-full">
        <HomeLayout className="pt-0">
          <Intro />
          <div className="flex flex-col items-center justify-center w-full relative" style={{zIndex: 4}}>
            <Avatar
              alt="David D. Chen"
              src="/images/profile/pic2.jpg"
              variant="rounded"
              sx={avatarStyle}
            />
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className="flex flex-col items-center text-center mt-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 3 }}
                >
                  <Typography variant="h4" component="h1" gutterBottom>
                    THIS WEBSITE IS A WORK IN PROGRESS
                  </Typography>
                  <Typography variant="body1" className="my-4">
                    I&apos;M A MS3 AT THE UNIVERSITY OF WASHINGTON SCHOOL OF MEDICINE. CHECK OUT MY PORTFOLIO OF WORKS HERE.
                  </Typography>
                  <Paper
                    elevation={3}
                    className="flex flex-col items-center mt-2 p-4"
                  >
                    <Link
                      href="/dummy.pdf"
                      target="_blank"
                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                    >
                      RESUME <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                    <Link
                      href="mailto:davidchen1337@gmail.com"
                      target="_blank"
                      className="mt-4 text-lg font-medium capitalize text-dark underline"
                    >
                      CONTACT
                    </Link>
                  </Paper>
                  <HireMe />
                </motion.div>
              )}
            </InView>
          </div>
        </HomeLayout>
      </div>
      <Footer />
    </main>
  );
}
