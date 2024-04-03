import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-700  to-black w-full md:h-screen text-white pt-20"
    >

      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center   w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Check out some of my Experience and Education right here</p>
        </div>
        
        <div className="card-wrapper w-[20%] sm:w-full   mt-5 flex md:flex sm:gap-10 mx-auto ">
        <div className="left w-[50%] flex  items-center justify-between">
        <fieldset
            data-aos="zoom-in"
            className=" w-[50%] p-15 py-10 sm:w-full sm:px-0"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-white">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-700"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-700"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-4 hover:border-yellow-700 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-5 rounded-lg bg-white" >
                <h1 className="text-[1.4rem] font-semibold  text-black sm:text-xl">
                  System's Engineer Trainee
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Infosys Limited
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2022 - Jan 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                In mI'm working as a Full Stack Developernt using React JS, where I work on creating interactive and user-friendly interfaces. Additionally, I am responsible for building the backend API using Node.js, Express.js, and MongoDB, enabling data storage and retrieval for the application.
                </p>
              </div>
            </div>
         </fieldset>
        </div>

        <div className="right w-[50%] flex  items-center justify-between">
          <fieldset
            data-aos="zoom-in"
            className="w-[50%] p-15 py-10 sm:w-full sm:px-0"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-white">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-700"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-700"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-4 hover:border-yellow-700 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-5 rounded-lg bg-white">
                <h1 className="text-[1.4rem] font-semibold  text-black sm:text-xl">
                  B.Tech, Mechanical Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  MRCE, Hyderabad
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2018 - Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  As an undergraduate student, I have a good understanding of
                  web development technologies such as HTML, CSS, Tailwind CSS,
                  JavaScript, and React.js, Next.js. Additionally, I'm proficient in
                  backend technologies such as Node.js, Express.js, and MongoDB.
                 
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

        
          
      </div>
    </div>
   
  );
};

export default Experience;
