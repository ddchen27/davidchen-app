import React from "react";
import HomeLayout from "./HomeLayout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <HomeLayout className="py-8 flex items-center justify-between">
        <span>&copy; {new Date().getFullYear()} David Chen</span>
        <div className="flex items-center">
          Built With <span className="text-primary text-2xl px-1">&#9825;</span>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Next.js
          </Link>
        </div>

        <Link
          href="https://twitter.com/UW_Football"
          target="_blank"
          className="underline underline-offset-2"
        >
          Go Dawgs!
        </Link>
      </HomeLayout>
    </footer>
  );
};

export default Footer;
