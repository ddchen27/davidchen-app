"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { EZTrainIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  console.log("hello there");
  console.log(pathname);
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/ddchen27"
          target="_blank"
          whileHover={{ y: -2 }}
          className="w-7 mr-3"
          whileTap={{scale:0.9}}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ddc27/"
          target="_blank"
          whileHover={{ y: -2 }}
          className="w-7 mx-3"
          whileTap={{scale:0.9}}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.goeztrain.com/company#about "
          target="_blank"
          whileHover={{ y: -2 }}
          className="w-7 ml-3"
          whileTap={{scale:0.9}}
        >
          <EZTrainIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
