"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/DC_DALI_logo-circular.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Image
        style={{ width: '7vw', maxWidth: '200px', height: 'auto' }}
        src={logo}
        alt="DC custom logo"
      ></Image>
    </div>
  );
};

export default Logo;
