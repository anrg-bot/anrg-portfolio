"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            As an Analytics Engineer at Northeastern University and a Master’s student in Data Analytics, I specialize in data engineering, workflow automation, and business intelligence. My background in Actuarial Science & Applied Statistics from Purdue University has strengthened my ability to analyze, optimize, and build scalable data solutions. 
            </p>
            <p className="text-lg">
            With hands-on experience that spans both my professional career and my collegiate career, I now excel at building data pipelines, developing interactive dashboards, and conducting deep-dive analytics to uncover insights that drive business outcomes.
            </p>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                R
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                html
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                dbt
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Snowflake
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Qlik
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Alteryx
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Azure
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Salesforce
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Slate
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tableau
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Machine Learning
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Neural Networks
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Decision Trees
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Time Series
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Financial Modeling
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Statistics
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Microsoft Office
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            FULL-TIME EXPERIENCE
          </motion.h1>

          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-600 -translate-x-1/2 z-0"></div>

            {/* EXPERIENCE ITEMS WRAPPER */}
            <div className="flex flex-col gap-y-1 relative z-10">

              {/* EXPERIENCE LIST ITEM 1 */}
              <div className="flex justify-between relative">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="px-3 py-1 font-semibold text-black text-lg bg-white w-fit rounded text-center">
                    Analytics Engineer
                  </div>
                  <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                    Northeastern University
                  </div>
                  <div className="p-3 text-sm italic">
                    Designed scalable Snowflake data structures and introduced dbt Cloud to modernize data transformation workflows. 
                    Collaborated with engineers and analysts to improve data quality, automate pipelines, and deliver clean, analysis-ready datasets.
                  </div>
                  <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                    2023 – Present
                  </div>
                </div>

                {/* CENTER DOT */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="absolute top-0 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10"></div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE LIST ITEM 2 */}
              <div className="flex justify-between relative">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER DOT */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="absolute top-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10"></div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  <div className="px-3 py-1 font-semibold text-black text-lg bg-white w-fit rounded text-center">
                    Lead Data Analyst
                  </div>
                  <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                    Gray Decision Intelligence
                  </div>
                  <div className="p-3 text-sm italic">
                  Designed custom analytics tools for clients with a focus on financial modeling and program economics. Used SQL and Qlik to integrate large datasets and uncover insights. Collaborated directly with clients through demos and working sessions.
                  </div>
                  <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                    2022 – 2023
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* EDUCATION CONTAINER */}
        <div 
          className="flex flex-col gap-12 justify-center pb-48"
          ref={educationRef}
        >
            
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>

            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: "0" } : {}}
              className="relative"
            >
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-600 -translate-x-1/2 z-0"></div>

              {/* EDUCATION ITEMS WRAPPER */}
              <div className="flex flex-col gap-y-1 relative z-10">
                
                {/* EDUCATION LIST ITEM 1 */}
                <div className="flex justify-between relative">
                  {/* LEFT */}
                  <div className="w-1/3">
                    <div className="px-3 py-1 font-semibold text-black text-lg w-fit rounded">
                      M.S. Data Analytics
                    </div>
                    <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                      Northeastern University
                    </div>
                    <div className="p-3 text-sm italic">
                      Focused on data engineering, predictive modeling, and advanced analytics, with hands-on projects in Python, R, and cloud technologies.
                    </div>
                    <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                      Jan 2024 – Jun 2025
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="w-1/6 flex justify-center relative">
                    <div className="absolute top-0 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10"></div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>

                {/* EDUCATION LIST ITEM 2 */}
                <div className="flex justify-between relative">
                  {/* LEFT */}
                  <div className="w-1/3"></div>

                  {/* CENTER DOT */}
                  <div className="w-1/6 flex justify-center relative">
                    <div className="absolute top-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white z-10"></div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-1/3">
                    <div className="px-3 py-1 font-semibold text-black text-lg w-fit rounded">
                      B.S. Actuarial Science & Applied Statistics
                    </div>
                    <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                      Purdue University
                    </div>
                    <div className="p-3 text-sm italic">
                      Emphasized statistical modeling, risk analysis, and data interpretation. Included relevant coursework in probability theory, regression analysis, and time series.
                    </div>
                    <div className="p-2 text-sm font-semibold text-gray-800 w-full">
                      Aug 2018 – May 2022
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

      </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;