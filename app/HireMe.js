import React from "react";
import Link from "next/link";
import { CircularMedStudent } from "./Icons";
import Image from "next/image";
import logo from "../public/three_color_logo_circle_crop.png";

const HireMe = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularMedStudent className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:davidchen1337@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light text-center shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          <Image
            src={logo}
            alt="DC custom logo"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
