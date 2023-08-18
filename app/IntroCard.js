// use rafce as shortcut for React arrow function
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const IntroCard = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  return (
    <Card variant="outlined" className="" sx={{ maxWidth: 275 }}>
      <h1>Hello world {counter}!!</h1>
      <p>
        This is my personal website to show my resume and portfolio.
        Built with Next.js and hosted on AWS Amplify. Work in progress (if you can't tell).
      </p>
      <Button onClick={increase}>Increment</Button>
    </Card>
  );
};

export default IntroCard;
