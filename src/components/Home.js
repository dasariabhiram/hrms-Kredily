
import React from 'react';
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

const Home = () => {
  return (
    <div className="h-screen w-screen relative  overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none overflow-hidden" />
      <h1 className={cn(" text-9xl text-white relative z-20")}>
       HRMS 
      </h1>
      <Boxes />
      <p className="text-center text-2xl mt-2 text-neutral-300 relative z-20">
      Unleashes a New Era of Workplace Efficiency and Employee Empowerment.
      </p>
    </div>
  );
};

export default Home;
