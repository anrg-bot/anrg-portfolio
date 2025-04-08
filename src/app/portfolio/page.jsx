"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "PLACEHOLDER",
    desc: "Project description here.",
    img: "/",
    link: "/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "PLACEHOLDER",
    desc: "Project description here.",
    img: "/",
    link: "/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "PLACEHOLDER",
    desc: "Project description here.",
    img: "/",
    link: "/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "PLACEHOLDER",
    desc: "Project description here.",
    img: "/",
    link: "/",
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* HEADER */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold">My Works</h1>
      </div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 px-8 pb-24">
        {items.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg p-6 bg-gradient-to-br ${item.color} text-white flex flex-col gap-4 w-full`}
          >
            <h2 className="text-2xl font-bold">{item.title}</h2>

            <div className="relative w-full h-48">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <p>{item.desc}</p>

            <Link href={item.link} className="mt-auto self-end">
              <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100">
                See Demo
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* GET IN TOUCH SECTION */}
      <div className="w-full pt-16 pb-10 flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Get In Touch!</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Data Engineer, Statistician, Innovator
              </textPath>
            </text>
          </motion.svg>

          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;