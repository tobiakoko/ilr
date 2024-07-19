
import React, { useEffect, useId, useState } from "react";
import Link from "next/link";
import Card from "./card";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { PlusIcon, XIcon } from "lucide-react";


const transition = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
}

const Content = () => {
  return (
    <section id='unveiled' className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <p className="text-sm font-bold text-violet-600 w-full mx-auto">Theme:</p>
          <p className="w-full h-24 content-center sm:text-6xl lg:text-8xl text-7xl font-extrabold leading-none tracking-tighter title mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-700 from-30% via-orange-500 to-amber-300">
            UNVEILED
          </p>
          <p className="text-sm mt-1 leading-relaxed">
          <i>
            {/*FIX ME*/}
                ...unveiled slogan goes here 
              </i>
            {/*FIX ME*/}  
          </p>
          <div className="text-xs font-bold flex flex-row gap-6 justify-center mt-4 lg:w-1/2 w-full leading-relaxed text-left">
            <div className="p-4">
              <p>FRIDAY 9TH AUGUST 2024</p>
              <p>6PM</p>
            </div>
            <div className="p-4 border-l border-gray-700">
              <p>SATURDAY 10TH AUGUST 2024</p>
              <p>9AM</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-8">
            <div className="md:flex-1 border-b border-gray-500"></div>
            <h3 className="text-xs text-gray-700 font-light flex-none leading-loose align-baseline tracking-[1em]">SPEAKERS</h3>
            <div className="md:flex-1 border-b border-gray-500"></div>
          </div>
          <Card />
        </div>
      </div>
      <div className="flex justify-center mb-12">
          <Link href={{pathname:`/register`}}><button className="inline-flex hover:text-white text-violet-600 hover:bg-violet-600 py-2 px-6 focus:outline-none bg-transparent border border-violet-600 rounded text-lg transition-transform active:scale-95">
              Register
          </button></Link>
      </div>
    </section>
  );
};

export default Content;