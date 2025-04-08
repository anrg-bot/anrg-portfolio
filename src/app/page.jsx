"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 relative">
          <Image src="/portrait.png" 
          alt="Portrait" 
          fill
          className="object-contain" />
        </div>
        
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Engineering Insight, Powering Decisions.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Welcome to my portfolio, where analytics meets action. 
          With a passion for uncovering insights and building scalable data solutions, 
          I transform raw information into powerful tools that drive smarter business decisions.
          </p>
          
          {/* BUTTONS */}
            <div className="w-full flex gap-4 justify-center">
              <Link href="/portfolio">
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                  View My Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="p-4 rounded-lg ring-1 ring-black">
                  Contact Me
                </button>
              </Link>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;