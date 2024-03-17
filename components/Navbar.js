import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className=" w-full bg-gray-950 ">
      <nav className="font-Barlow flex flex-col space-y-4 sm:flex-row  py-6 w-3/4 lg:w-1/2 mx-auto justify-between items-center">
        <div className=" text-xl">
          <Image className="w-20 invert" src={Logo} alt="logo" />
        </div>
        <ul className="flex text-white space-x-10">
          <Link href="https://github.com/Rajat-Uchiha">
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/rajat-kalotra-319521230/">
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link href="https://leetcode.com/rajat_171/">
            <SiLeetcode className="h-6 w-6" />
          </Link>
          <Link href="https://www.hackerrank.com/profile/rajat_171">
            <FaHackerrank className="h-6 w-6" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
