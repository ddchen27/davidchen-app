// use rafce as shortcut for React arrow function
"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AnimatedText from "./AnimatedText";
import { LinkArrow } from "./Icons";

const Intro = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div className="w-1/2 flex flex-col items-center self-center">
        <AnimatedText
          text='"We only live to discover beauty. All else is a form of waiting." - Kahlil Gibran'
          className="!text-5xl !text-left"
        />
        <p className="my-4 text-base font-medium">
          This is my personal website to show my resume and portfolio. Built
          with React Next.js, Tailwind.css, and hosted on AWS Amplify. Work in
          progress (if you can&apos;t tell).
        </p>
        <Button onClick={increase}>Increment {counter}</Button>
        <div className="flex items-center self-start mt-2">
          <Link
            href="/dummy.pdf"
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            Resume <LinkArrow className={"w-6 ml-1"} />
          </Link>
          <Link href="mailto:davidchen1337@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline">
            Contact
          </Link>
        </div>
    </div>
  );
};

export default Intro;
