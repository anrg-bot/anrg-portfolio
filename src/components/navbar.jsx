"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-50 relative">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 justify-end w-1/3 lg:justify-end">
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Image src="/resume.png" alt="Resume" width={24} height={24} />
        </Link>
        <Link href="https://github.com/anrg-bot" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/anrg-macha" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {/* MOBILE MENU LIST */}
        <motion.div
          variants={listVariants}
          initial="closed"
          animate={open ? "opened" : "closed"}
          className={`fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 transition-all`}
        >
          {links.map((link) => (
            <motion.div
              key={link.title}
              variants={listItemVariants}
              onClick={() => setOpen(false)} // closes menu after navigation
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;