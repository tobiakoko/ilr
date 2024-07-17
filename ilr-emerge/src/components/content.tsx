"use client";
import React, { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { speakers } from "@/utils/data";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { PlusIcon, XIcon } from "lucide-react";

  //function that receive the specific element_id as string and scroll into that element_id
const scrollToSection = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth"});
    //block: "end", inline: "nearest" 
}

const transition = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
}

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  //prevents the dialig from pre-rendering on the server
  if (!mounted) {
    return null;
  }


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <p className="text-sm font-bold text-violet-600 w-full text-left pl-96">Theme:</p>
          <p className="w-full h-24 content-center md:text-6xl lg:text-8xl text-5xl font-extrabold leading-none tracking-tighter title mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-700 from-30% via-orange-500 to-amber-300">
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
          {/* Speaker profiles*/}
          <MotionConfig transition={transition}>
            <motion.div className="relative flex flex-col md:flex-row justify-center space-x-2" initial="initial" whileHover="animate" 
                        animate={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)}
                        tabIndex={0}>
              {speakers.map(speaker => (
                <motion.div key={speaker.position} className="mt-4 max-w-sm bg-white border border-zinc-950/10 overflow-hidden rounded-md shadow"
                            layoutId={`dialog-${uniqueId}`} style={{ borderRadius: "5px"}} >
                  <motion.div layoutId={`dialog-img-${uniqueId}`}>
                    <Image 
                      src={speaker.image}
                      alt={speaker.name}
                      className="object-cover w-full"
                    />
                  </motion.div>
                  <div className="flex flex-grow flex-row items-end justify-between p-1">
                    <div>
                      <motion.div layoutId={`dialog-title-${uniqueId}`} className="mb-2 text-xl font-bold tracking-tight text-gray-900">{speaker.name}</motion.div>
                      <motion.div layoutId={`dialog-subtitle-${uniqueId}`} layout="position" className="mb-3 font-xs tracking-tight text-gray-700 tracking-tight">{speaker.designation}</motion.div>
                    </div>
                    <button type="button" aria-label="Open dialog"  
                                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center 
                                rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 
                                active:scale-[0.98]">
                                  <PlusIcon size={12} />
                        <span className="sr-only">Open actions menu</span>
                    </button>
                  </div>    
                </motion.div>  
              ))}
            </motion.div>
            {createPortal(
                  <AnimatePresence initial={false} mode="sync">
                    {isOpen && (
                      <>
                        <motion.div 
                          key={`backdrop-${uniqueId}`}
                          className="fixed inset-0 h-full w-full bg-white/40 backdrop-blur-sm"
                          variants={{ open: { opacity: 1 }, closed: { opacity: 0} }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        />
                        
                        <motion.div
                          key="dialog"
                          className="pointer-events-none fixed inset-0 flex items-center justify-center"
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          {speakers.map(speaker => (
                            <motion.div
                              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white sm:w-[500px]"
                              layoutId={`dialog-${uniqueId}`}
                              tabIndex={-1}
                              style={{ borderRadius: "24px"}}
                              key={speaker.position}
                            >
                              <motion.div layoutId={`dialog-img-${uniqueId}`}>
                                <Image 
                                  src={speaker.image}
                                  alt={speaker.name}
                                  className="h-full w-full"
                                />
                              </motion.div>
                              <div className="p-6">
                                <motion.div layoutId={`dialog-title-${uniqueId}`} className="text-2xl text-gray-900">{speaker.name}</motion.div>
                                <motion.div layoutId={`dialog-subtitle-${uniqueId}`} className="text-gray-700">{speaker.designation}</motion.div>
                                <motion.div
                                  initial={{ opacity:0, scale: 0.8 }}
                                  animate={{ opacity:1, scale: 1 }}
                                  exit={{ opacity:0, scale: 0.8 }}
                                  className="origin-bottom"
                                >
                                  <p className="mt-2 text-gray-600">{speaker.bio}</p>
                                </motion.div>
                              </div>
                              <button type="button" 
                                      className="absolute right-6 top-6 text-gray-100"
                                      aria-label="Close dialog"
                                      onClick={() => setIsOpen(false)}>
                                        <XIcon size={24} />
                              </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>,
                  document.body,
                )}        
          </MotionConfig>
        </div>
      </div>
      <div className="flex justify-center mb-12">
          <Link href={{pathname:`/register`}}><button className="inline-flex text-white bg-violet-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-transform active:scale-95">
              Register
          </button></Link>
          <Link href="#contact"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-transform active:scale-95" onClick={()=>scrollToSection("contact")}>
            Contact us
          </button></Link>
      </div>
    </section>
  );
};

export default Content;